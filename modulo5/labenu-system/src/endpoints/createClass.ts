import { Request, Response } from "express";
import { Classes } from "..";
import connection from "../connection";

export const createClass = async (req: Request, res: Response):Promise<any> => {
    let erroCode = 400
    try {
        const {name, module} = req.body

        const response: Classes = await connection("Classes")
        .insert({
            id: Date.now(),
            name: req.body.name,
            module: req.body.module
        })

        if (!req.body.name) {
            erroCode = 404
            throw new Error("Verify the name input")
        } else if (!req.body.module) {
            erroCode = 404
            throw new Error("Verify the module input")
        }

        res.send("The class was successfully created!")

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}