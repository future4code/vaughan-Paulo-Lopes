import { Response, Request } from "express";
import connection from "../data/connection";

export const getRecipe = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400;
  try {
    const token = req.headers.authorization;

    if (!token) {
      erroCode = 401;
      throw new Error("Token is missing");
    }

    const response = await connection("cookenu_recipes")
      .select("id", "title", "description", "creation")
      .where({ id: req.params.id });

    res.status(200).send(response[0]);
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
