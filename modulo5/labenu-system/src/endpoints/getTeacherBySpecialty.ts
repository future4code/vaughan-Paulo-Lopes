import { Request, Response } from "express";
import connection from "../connection";

export const getTeacherBySpecialty = async(req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const response = await connection("Specialty")
        .select("*")
        .join("Teacher", "Teacher.id", "=", "teacher_id")
        .where("Specialty.name", "=", `${req.params.specialty}`)

        if (!connection) {
            erroCode = 500
            throw new Error("Server error, try again later")
        }
        if (!response.length) {
            erroCode = 404
            throw new Error("The list is empty")
        }
        if (!req.params.specialty) {
            erroCode = 404
            throw new Error("Verify the specialty name")
        }

        res.send(response)

    } catch (error:any) {
        res.send(error.message)
    }
}