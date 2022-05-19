import { Request, Response } from "express";
import connection from "../connection";

export const getAllProducts = async(req: Request, res: Response): Promise<any> => {
    let erroCode:number = 400
    try {
        const {order, search} = req.query
        
        const response = await connection("labecommerce_products")
        .where("name", "like", `%${search}%`)
        .orderBy(`name`, `${order}`)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee Not Found")
        }

        res.send(response)

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
}