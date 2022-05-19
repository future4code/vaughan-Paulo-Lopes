import express from "express"
import cors from "cors"
import { createUser } from "./endpoints/createUser"
import { getUser } from "./endpoints/getUser"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Keep Running")
})

//---------------------Exercicio 1 ---------------------Exercicio 1 ---------------------Exercicio 1 ---------------------Exercicio 1 ---------------------Exercicio 1 ---------------------Exercicio 1 

app.get("/users/:cep", getUser)

//---------------------Exercicio 2 ---------------------Exercicio 2 ---------------------Exercicio 2 ---------------------Exercicio 2 ---------------------Exercicio 2 ---------------------Exercicio 1 

// CREATE TABLE users_cep (
// 	id VARCHAR(255) PRIMARY KEY,
//     cep INT NOT NULL,
//     numero INT NOT NULL, 
//     bairro VARCHAR(255),
//     cidade VARCHAR(255),
//     estado VARCHAR(255)
// )

//---------------------Exercicio 3 ---------------------Exercicio 3 ---------------------Exercicio 3 ---------------------Exercicio 3 ---------------------Exercicio 3 ---------------------Exercicio 1 
//Te dizar que eu não entendi absolutamente nada desse enunciado (o endpoint de cadastro era o da aula? tendi nd)

app.post("/users", createUser)