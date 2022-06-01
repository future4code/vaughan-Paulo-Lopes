import { Request, Response } from "express";
import connection from "../connection";

export const getAllTeachers = async(req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const response = await connection("Teacher")

        if (!connection) {
            erroCode = 500
            throw new Error("Server error, try again later")
        }
        if (!response.length) {
            erroCode = 404
            throw new Error("The list is empty")
        }

        res.send(response)

    } catch (error:any) {
        res.send(error.message)
    }
}