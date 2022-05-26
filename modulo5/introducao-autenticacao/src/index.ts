import { v4 } from "uuid"
import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import * as jwt from "jsonwebtoken"
import { Authentication } from "./types"
import { Signup } from "./endpoints/signup"
import { Login } from "./endpoints/login"
import { getUserInformation } from "./endpoints/getUserInformation"

//---------------Exercicio 1 ---------------Exercicio 1 ---------------Exercicio 1 ---------------Exercicio 1 ---------------Exercicio 1 

//1.a) Sim, concordo.

//1.b) 

export const genereteId = (): string => {
    return v4()
}

//---------------Exercicio 2 ---------------Exercicio 2 ---------------Exercicio 2 ---------------Exercicio 2 ---------------Exercicio 2 

//2.a) Primeira ele pega o nome da tabela e armazena dentro de uma variavel, depois ele faz a connexao com o banco de dados, por ultimo ele faz a funcao
// de criar um user.

//2.b) Resposta no arquivo SQL.sql

//2.c)

app.post("/createUser", createUser)

//---------------Exercicio 3 ---------------Exercicio 3 ---------------Exercicio 3 ---------------Exercicio 3 ---------------Exercicio 3 

//3.a) "as string" funciona como uma comunicação com a maquina onde eu estou garantindo a ela que aquela propriedade vai retornar como string

const expiresIn = "10min"
export const generateToken = (input: Authentication) => {
    const token = jwt.sign(
        {
            id: input.id
        },
        "bananinha",
        {
            expiresIn
        }
    )
    return token
}

//---------------Exercicio 4 ---------------Exercicio 4 ---------------Exercicio 4 ---------------Exercicio 4 ---------------Exercicio 4 

//1.a.b.c) Login.ts
app.post("/user/signup", Signup)

//---------------Exercicio 5 ---------------Exercicio 5 ---------------Exercicio 5 ---------------Exercicio 5 ---------------Exercicio 5 

//5) getUserByEmail.ts

//---------------Exercicio 6 ---------------Exercicio 6 ---------------Exercicio 6 ---------------Exercicio 6 ---------------Exercicio 6 

//6.a.b) login.ts

app.post("/user/login", Login)

//---------------Exercicio 7 ---------------Exercicio 7 ---------------Exercicio 7 ---------------Exercicio 7 ---------------Exercicio 7 

//7.a) Ela retorna qualquer coisa, seja string, number, array, etc.

//7.b)
export const getData = (token: string): Authentication => {
    const payload = jwt.verify(token, "bananinha") as any
    const result = {
        id: payload.id
    }

    return result
}

//---------------Exercicio 8 ---------------Exercicio 8 ---------------Exercicio 8 ---------------Exercicio 8 ---------------Exercicio 8 

//8.a) data/getUserById

//8.b)
app.get("/user/profile", getUserInformation)