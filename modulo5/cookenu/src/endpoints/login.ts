import { Response, Request } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { GenerateToken, HashManager } from "../services/types";

export const login = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400;
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!email) {
      erroCode = 406;
      throw new Error("The email input is missing");
    } else if (!user) {
      erroCode = 404;
      throw new Error("User not found");
    }
    if (!password) {
      erroCode = 406;
      throw new Error("The password input is missing");
    }

    let hashManger: HashManager = new HashManager();
    const comparePassword = hashManger.compareHash(password, user.password);

    if (!comparePassword) {
      erroCode = 401;
      throw new Error("Incorrect password");
    }

    const token = GenerateToken(user.id);

    res.status(200).send({ token });
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
