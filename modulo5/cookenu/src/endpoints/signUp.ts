import { Response, Request } from "express";
import connection from "../data/connection";
import { HashManager, User } from "../services/types";
import { generateId } from "../services/uuid";

export const signUp = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400;
  try {
    const { name, email, password } = req.body;
    const id = generateId();

    if (!name) {
      erroCode = 406;
      throw new Error("The name input is missing");
    }
    if (!email) {
      erroCode = 406;
      throw new Error("The email input is missing");
    }
    if (!password) {
      erroCode = 406;
      throw new Error("The password input is missing");
    } else if (password.length <= 6) {
      erroCode = 406;
      throw new Error("The password be longer then 6 caracters");
    }

    const hashManager: HashManager = new HashManager();
    const hashPassword = hashManager.generateHash(password);

    const response: User = await connection("cookenu_user").insert({
      id: id,
      name: name,
      email: email,
      password: hashPassword,
    });

    res.status(201).send("User successfully created");
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
