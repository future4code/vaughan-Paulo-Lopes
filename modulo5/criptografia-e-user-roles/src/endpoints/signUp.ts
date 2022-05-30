import { hashSync } from "bcryptjs";
import { Request, Response } from "express";
import connection from "../connection";
import { generateId, generateToken } from "../data/uuid";

export const signUp = async(req: Request, res: Response): Promise <any> => {
    let erroCode:number = 404
    try {
        const {email, password, role} = req.body
        const id = generateId()

        const hashPassword: string = hashSync(password)

        await connection("User")
        .insert({
            id: id,
            email: email,
            password: hashPassword,
            role: role
        })

        const token = generateToken({id, role: role})

        res.send(token)

    } catch(error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}
