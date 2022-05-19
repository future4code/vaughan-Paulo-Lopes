import { Request, Response } from "express";
import connection from "../connection";

export const buyProduct = async (req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
       const {userId, productId, quantity} = req.body

        if (!req.body.userId) {
            erroCode = 404
            throw new Error ("The userId input is missing")
        } else if (!req.body.productId) {
            erroCode = 404
            throw new Error ("The productId input is missing")
        } else if (!req.body.quantity) {
            erroCode = 404
            throw new Error ("The quantity input is missing")
        }

       const response = await connection("labecommerce_purchases")
       .insert({
           id: Date.now(),
           user_id: userId,
           product_id: productId,
           quantity: quantity
       })

       if (!response) {
        erroCode = 500
        throw new Error ("Error in connection")
    }

       res.send("Product bought")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}