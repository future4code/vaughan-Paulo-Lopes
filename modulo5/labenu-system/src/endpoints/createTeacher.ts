import { Request, Response } from "express";
import { Teacher } from "..";
import connection from "../connection";

export const createTeacher = async (req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const {name, email, bornDate, classId} = req.body

        const response: Teacher = await connection("Teacher")
        .insert({
            id: Date.now(),
            name: name,
            email: email,
            born_date: bornDate,
            class_id: classId
        })

        if (!req.body.name) {
            erroCode = 404
            throw new Error("Verify the name input")
        } else if (!req.body.email) {
            erroCode = 404
            throw new Error("Verify the email input")
        } else if (!req.body.bornDate) {
            erroCode = 404
            throw new Error("Verify the born date input")
        } else if (!req.body.classId) {
            erroCode = 404
            throw new Error("Verify the class id input")
        } 

        res.send("Teacher successfully created!")

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
}