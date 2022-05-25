import { Request, Response } from "express";
import connection from "../connection";

export const inSameClass = async (req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try {
        
        const response = await connection("Classes as class")
        .select("stud.name")
        .join("Student as stud", "stud.class_id", "class.id")
        .where("class.id", "=", `${req.params.id}`)

        if (!connection) {
            erroCode = 500
            throw new Error("Server error, try again later")
        }
        if (!response.length) {
            erroCode = 404
            throw new Error("The list is empty")
        }
        if (!req.params.id) {
            erroCode = 404
            throw new Error("Verify the id input")
        }

        res.send(response)

    }  catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }

    
}


