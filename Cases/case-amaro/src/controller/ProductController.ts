import { Request, Response } from "express";
import { productBusiness } from "../models/Classes";

export class ProductController {
    insertProduct = async(req: Request, res: Response) => {
        try {
            const {name, tags} = req.body
            const response = await productBusiness.insertProduct(name, tags)
    
            res.send("The product was successfully created")
        } catch (error: any) {
            res.send(error.sqlMessage || error.message)
        }
    }

    getProduct = async (req: Request, res: Response) => {
        try {
            const {search} = req.query as any
            const token = req.headers.authorization as string
            const response = await productBusiness.getProduct(search, token)

            res.send(response)

        } catch (error: any) {
            res.send(error.sqlMessage || error.message)
        }
    }
}