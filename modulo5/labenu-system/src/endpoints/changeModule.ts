import { Request, Response } from "express";
import connection from "../connection";

export const changeModule = async (req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try {
        const {module} = req.body
        const response = await connection("Classes")
        .update({module: module})
        .where({id: req.params.id})

        if (!module) {
            erroCode = 404
            throw new Error("Verify the module input")
        }
        if (!req.params.id) {
            erroCode = 404
            throw new Error("Verify the id input")
        }

        res.send("Updated Module")

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}