import { Request, Response } from "express";
import connection from "../connection";

export const getUserByHobby = async(req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const response = await connection("Hobby as hob")
        .select("*")
        .join("Student as stud", "stud.id", "user_id")
        .where("hob.name", "=", `${req.params.hobby}`)

        if (!connection) {
            erroCode = 500
            throw new Error("Server error, try again later")
        }
        if (!response.length) {
            erroCode = 404
            throw new Error("The list is empty")
        }
        if (!req.params.hobby) {
            erroCode = 404
            throw new Error("Verify the hobby name")
        }

        res.send(response)

    } catch (error:any) {
        res.send(error.message)
    }
}