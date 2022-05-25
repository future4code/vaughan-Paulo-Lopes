import { Request, Response } from "express";
import connection from "../connection";

export const changeTeacherClass = async (req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try {
        const {classId} = req.body
        
        const response = await connection("Teacher")
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

        res.send("Teacher succesfully changed class")

    }  catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}