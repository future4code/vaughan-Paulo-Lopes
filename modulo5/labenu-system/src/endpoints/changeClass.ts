import { Request, Response } from "express";
import connection from "../connection";

export const changeClass = async (req: Request, res: Response): Promise<any> => {
        let erroCode:number = 400
    try {
        const {classId} = req.body

        const response = await connection("Student")
        .update({class_id: classId})
        .where({id: req.params.id})

        if (!classId) {
            erroCode = 404
            throw new Error("Verify the class id input")
        }
        if (!req.params.id) {
            erroCode = 404
            throw new Error("Verify the id input")
        }

        res.send("User class successfully changed")

    }  catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}