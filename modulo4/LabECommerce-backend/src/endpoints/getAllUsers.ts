import { Request, Response } from "express";
import connection from "../connection";

export const getAllUsers = async(req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
        const response = await connection("labecommerce_users")

        if(!response) {
            erroCode = 500
            throw new Error ("Unexpected Error in server")
        }
        res.send(response)

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}