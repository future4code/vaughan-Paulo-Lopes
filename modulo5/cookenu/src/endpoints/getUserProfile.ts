import { Response, Request } from "express";
import connection from "../data/connection";
import { GetTokenData } from "../services/types";

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<any> => {
  let erroCode = 400;
  try {
    const token = req.headers.authorization;

    if (!token) {
      erroCode = 401;
      throw new Error("Wrong token");
    }

    const tokenData = GetTokenData(token);

    if (!tokenData) {
      erroCode = 403;
      throw new Error("Incorrect Token");
    }

    const response = await connection("cookenu_user")
      .select("id", "name", "email")
      .where({ id: req.params.id });

    res.status(200).send(response[0]);
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
