import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/User"

export class Authenticator {
    generateToken = (id: AuthenticationData): string => {
        return jwt.sign (
            id,
            "r2d2c3po",
            {
                expiresIn: "1h"
            }
        )
    }

    getTokenData = (token: string): AuthenticationData => {
        return jwt.verify (token, "r2d2c3po") as AuthenticationData
    }
}