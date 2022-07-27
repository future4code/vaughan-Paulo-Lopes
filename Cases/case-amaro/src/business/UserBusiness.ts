import { authenticator, hashManager, idGenerator, userDatabase } from "../models/Classes"

export class UserBusiness {
    insertUser = async(name: string, email: string, password: string) => {
        if(!name) {
            throw new Error("The name input is wrong")
        }
        if(!email) {
            throw new Error("The name input is wrong")
        } else if(email.indexOf("@") === -1) {
            throw new Error("The email must be contain an @")
        }
        if(!password) {
            throw new Error("The name input is wrong")
        } else if(password.length < 6) {
            throw new Error("The password must contain 6 characteres")
        }

        const id = idGenerator.generateId()
        const cypherPassword = await hashManager.generateHash(password)

        await userDatabase.insertUser({
            id: id,
            name: name,
            email: email,
            password: cypherPassword
        })
    }

    login = async (email: string, password: string) => {
        const user = await userDatabase.selectUserByEmail(email)

        if(!email) {
            throw new Error("The name input is wrong")
        } else if(email.indexOf("@") === -1) {
            throw new Error("The email must be contain an @")
        }
        if(!password) {
            throw new Error("The name input is wrong")
        } else if(password.length < 6) {
            throw new Error("The password must contain 6 characteres")
        }
        if(!user) {
            throw new Error("User not found")
        }

        const validationPassword = await hashManager.compare(password, user.password)

        if(!validationPassword) {
            throw new Error("Incorrect password")
        }

        const token = authenticator.generateToken({id: user.id})

        return token
    }
}