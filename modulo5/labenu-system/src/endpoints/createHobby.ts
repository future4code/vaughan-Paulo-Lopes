import { Request, Response } from "express";
import connection from "../connection";

export const createHobby = async (req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const {name, userId} = req.body

        const response = await connection("Hobby")
        .insert({
            id: Date.now(),
            name: name,
            user_id: userId
        })

        if (!req.body.name) {
            erroCode = 404
            throw new Error("Verify the name input")
        } else if (!req.body.userId) {
            erroCode = 404
            throw new Error("Verify the student Id input")
        }

        res.send("Hobby successfully created!")

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
}