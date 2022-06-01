import { Response, Request } from "express";
import connection from "../data/connection";
import { FollowSystem, GetTokenData } from "../services/types";
import { generateId } from "../services/uuid";

export const followUser = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400;
  try {
    const { userFollow } = req.body;
    const token = req.headers.authorization as string;
    const id = generateId();

    if (!token) {
      erroCode = 401;
      throw new Error("Token is missing");
    }

    if (!userFollow) {
      erroCode = 401;
      throw new Error("UserId input is missing");
    }

    const tokenData = GetTokenData(token);

    if (!tokenData) {
      erroCode = 403;
      throw new Error("Invalid token");
    }

    const response: FollowSystem = await connection("cookenu_friends").insert({
      id: id,
      user_id: tokenData.id,
      user_follow: userFollow,
    });

    res.send("Following user");
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
