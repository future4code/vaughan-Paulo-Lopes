import { idGenerator, productDatabase } from "../models/Classes"

export class ProductBusiness {
    insertProduct = async (name: string, tags: string) => {
        if(!name) {
            throw new Error("The name input is missing")
        }
        if(!tags) {
            throw new Error("The tags input is missing")
        }

        const id = idGenerator.generateId()

        await productDatabase.insertProduct({
            id: id,
            name: name,
            tags: tags
        })
    }

    getProduct = async(search: string, token: string) => {
        if(!search) {
            productDatabase.getAllProducts
        }
        if(!token) {
            throw new Error("Verify you authorization")
        }

        const result =  await productDatabase.getProduct(search)
        return result
    }
}