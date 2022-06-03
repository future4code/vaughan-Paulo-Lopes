import { Response, Request } from "express";
import connection from "../data/connection";

export const unfollowUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  let erroCode = 400;
  try {
    const { userUnfollow } = req.body;
    const token = req.headers.authorization;

    if (!userUnfollow) {
      erroCode = 401;
      throw new Error("User ID input is missing");
    }

    if (!token) {
      erroCode = 401;
      throw new Error("Token is missing");
    }

    const response = await connection("cookenu_friends")
      .delete()
      .where({ user_follow: userUnfollow });

    res.send("User unfollowed");
  } catch (error: any) {
    res.status(erroCode).send(error.sqlMessage || error.message);
  }
};
