import { Request, Response } from "express";
import { UserBussines } from "../business/UserBussiness";

const userBusiness = new UserBussines()

export class UserController {
    signup = async (req: Request, res: Response) => {
        try {
            const {name, email, password, role} = req.body
            const response = await userBusiness.signup(name, email, password, role)
            res.status(200).send("Created User")

        } catch (error: any) {
            res.status(400).send(error.message) 
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body

            const response = await userBusiness.login(email, password)

            res.send({response})
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getUsers = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await userBusiness.getUsers(token)

            res.send(response)
        } catch(error:any) {
            res.send(error.message)
        }
    }

    deleteUser = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            const response = await userBusiness.deleteUser(token, id)

            res.send("The user was deleted")
        } catch (error:any) {
            res.send(error.message)
        }
    }
}