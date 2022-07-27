import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    insertProduct = async(product: Product) => {
        await this.connection("products_a")
        .insert({
            id: product.id,
            name: product.name,
            tags: product.tags
        })
    }

    getProduct = async(search: string) => {
        try {
            const response = await this.connection("products_a")
            .select("*")
            .where("tags", "like", `%${search}%`)
            .or
            .where("name", "like", `%${search}%`)

            return response
        } catch(error: any) {
            throw new Error(error.message)
        }
    }

    getAllProducts = async() => {
        try {
            const response = await this.connection("products_a")
            return response
        }catch(error: any) {
            throw new Error(error.message)
        }
    }
}