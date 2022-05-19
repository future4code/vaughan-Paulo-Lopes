import { Request, Response } from "express";
import connection from "../connection";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
        const {name, email, password} = req.body
        
        if (!req.body.name) {
            erroCode = 404
            throw new Error ("The name input is missing")
        } else if (!req.body.email) {
            erroCode = 404
            throw new Error ("The email input is missing")
        } else if (!req.body.password) {
            erroCode = 404
            throw new Error ("The password input is missing")
        }

        const response = await connection("labecommerce_users")
        .insert({
            id: Date.now(),
            name: name,
            email: email,
            password: password
        })

        if (!response) {
            erroCode = 500
            throw new Error ("Error in connection")
        }

        res.send("User succefully created!")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}