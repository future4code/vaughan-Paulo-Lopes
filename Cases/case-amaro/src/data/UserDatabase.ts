import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    insertUser = async(user: User) => {
            await this.connection("users_a")
            .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

    selectUserByEmail = async(email: string) => {
        try {
            const result = await this.connection("users_a")
            .select("*")
            .where({email: email})

            return {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password
            }

        }catch (error: any) {
            throw new Error(error.message)
        }
    }
}