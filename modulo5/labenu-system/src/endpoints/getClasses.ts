import { Request, Response } from "express";
import { Classes } from "..";
import connection from "../connection";

export const getClasses = async (req: Request, res: Response): Promise<any> => {
  let erroCode = 400
  try {
    const { situation } = req.query;

    const response = await connection("Classes");

    if (situation === "active") {
      const response = await connection("Classes").where("module", ">", 0);
      res.send(response);

    } else if (situation === "disable") {
      const response = await connection("Classes").where("module", "=", 0);
      res.send(response);
    }

    if (!connection) {
      erroCode = 500
      throw new Error("Server error, try again later")
  }
  if (!response.length) {
      erroCode = 404
      throw new Error("The list is empty")
  }

    res.send(response);

  } catch (error: any) {
    res.send(error.sqlMessage || error.message);
  }
};
