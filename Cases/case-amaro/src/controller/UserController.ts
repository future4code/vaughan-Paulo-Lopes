import {Request, Response} from "express"
import { authenticator, userBusiness } from "../models/Classes"

export class UserController {
    insertUser = async(req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body
            const response = await userBusiness.insertUser(name, email, password)

            res.send("User successfully created!")
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
          }
    }

    login = async(req: Request, res: Response) => {
        try {
            const {email, password} = req.body
            const response = await userBusiness.login(email, password)

            res.send({response})

        }catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        }

    }
}