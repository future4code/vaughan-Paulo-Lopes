import { Response, Request } from "express";
import connection from "../data/connection";
import { GetTokenData } from "../services/types";

export const getFollowRecipes = async (
  req: Request,
  res: Response
): Promise<any> => {
  let erroCode = 400;
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      erroCode = 401;
      throw new Error("Token is missing");
    }

    const tokenData = GetTokenData(token);

    if (!tokenData) {
      erroCode = 403;
      throw new Error("Invalid Token");
    }

    const response = await connection("cookenu_friends as friends").where({
      user_id: tokenData?.id,
    });

    res.send(response);
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};

//Depois de 1 milhão de alterações eu desisti de fazer isso funcionar
