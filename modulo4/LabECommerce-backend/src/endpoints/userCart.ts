import { Request, Response } from "express";
import connection from "../connection";

export const userCart = async(req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
        const response = await connection("labecommerce_purchases as purchases")
        .select("users.email","products.name", "quantity" )
        .join("labecommerce_products as products", "products.id", "product_id")
        .join("labecommerce_users as users", "users.id", "user_id")
        .where({user_id: req.params.userId})

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee Not Found")
        }

        res.send(response)

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}