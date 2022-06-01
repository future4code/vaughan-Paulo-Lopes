import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateId, generateToken, getData } from "../data/uuid";

export const getUserInformation = async(req: Request, res: Response): Promise <any> => {
    let erroCode:number = 404
    try {

        const token = req.headers.authorization as string

        const authenticantionData = getData(token)

        if (authenticantionData.role !== "normal") {
            erroCode = 422
            throw new Error ("Access denied")
        }

        const response = await connection("User")
        .where({id: authenticantionData.id})

        res.send(response)

    } catch(error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}