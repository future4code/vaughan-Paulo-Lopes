import { Request, Response } from "express";
import connection from "../connection";

export const createProduct = async (req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
        const {name, price, imageUrl} = req.body

        if (!req.body.name) {
            erroCode = 404
            throw new Error ("The name input is missing")
        } else if (!req.body.price) {
            erroCode = 404
            throw new Error ("The price input is missing")
        } else if (!req.body.imageUrl) {
            erroCode = 404
            throw new Error ("The imageUrl input is missing")
        }

        const response = await connection("labecommerce_products")
        .insert({
            id: Date.now(),
            name: name,
            price: price,
            img_url: imageUrl
        })

        if (!response) {
            erroCode = 500
            throw new Error ("Error in connection")
        }

        res.send("Product added to the market")

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}