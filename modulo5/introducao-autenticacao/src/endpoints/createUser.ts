import connection from "../data/connection";
import { Request, Response } from "express";
import { genereteId } from "..";

export const createUser = async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400
    try {
        const {email, password} = req.body

        await connection("User")
        .insert({
            id: genereteId(),
            email: email,
            password: password
        })

        res.send("User successfully created!")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}