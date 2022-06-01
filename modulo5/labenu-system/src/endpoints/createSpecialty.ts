import { Request, Response } from "express";
import connection from "../connection";

export const createSpecialty = async (req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const {name, teacherId} = req.body

        const response = await connection("Specialty")
        .insert({
            id: Date.now(),
            name: name,
            teacher_id: teacherId
        })

        if (!req.body.name) {
            erroCode = 404
            throw new Error("Verify the name input")
        } else if (!req.body.teacherId) {
            erroCode = 404
            throw new Error("Verify the teacher id input")
        }

        res.send("Specialty successfully created!")

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
}