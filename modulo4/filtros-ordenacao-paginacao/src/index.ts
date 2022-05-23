import {Response, Request}from "express"
import express from "express"
import cors from "cors"
import connection from "./connection"

const app = express()

app.use(express.json())
app.use(cors())

app.listen("3003", () => {
    console.log("Run, server, run")
})

// ----------Exercicio 1------------------Exercicio 1------------------------Exercicio 1-----------------Exercicio 1----------------Exercicio 1-----------------

// 1.a)

app.get("/recipes", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        const title = req.query.title

        const response = await connection("aula48_exercicio")
        .where("name", "like", `${title}`)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        } 

        res.send(response)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})


// 1.b)

app.get("/recipes/:title", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        const title = req.params.title

        const response = await connection("aula48_exercicio")
        .where("name", "like", `${title}`)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        } 

        res.send(response)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})


// ----------Exercicio 2------------------Exercicio 2------------------------Exercicio 2-----------------Exercicio 2----------------Exercicio 2-----------------

app.get("/employee", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        const title = req.query.title

        if (!title) {
            const response = await connection("aula48_exercicio")
            .orderBy("email", "asc")

            if(!response.length) {
                erroCode = 404
                throw new Error("Employee Not Found")
            }

            res.send(response)
        }
        
        const response = await connection("aula48_exercicio")
        .where("name", "like", `${title}`)
        .orderBy("email", "asc")

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee Not Found")
        }

        res.send(response)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})

// ----------Exercicio 3------------------Exercicio 3------------------------Exercicio 3-----------------Exercicio 3----------------Exercicio 3-----------------

app.get("/employee", async (req: Request, res: Response) => {
    let erroCode = 400

    try {
        const pagination = Number(req.query.pagination)

        const response = await connection("aula48_exercicio")
        .limit(5)
        .offset(pagination)

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee not found")
        } 

        res.send(response)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})

// ----------Exercicio 4------------------Exercicio 4------------------------Exercicio 4-----------------Exercicio 4----------------Exercicio 4-----------------

app.get("/employee", async (req: Request, res: Response) => {
    let erroCode = 400
    const title = req.query.title
    const pagination = Number(req.query.pagination)

    try {
        if (!title) {
            const response = await connection("aula48_exercicio")
            .limit(5)
            .offset(pagination)
            .orderBy("id", "asc")

            if(!response.length) {
                erroCode = 404
                throw new Error("Employee Not Found")
            }

            res.send(response)
        }
        
        const response = await connection("aula48_exercicio")
        .where("name", "like", `${title}`)
        .limit(5)
        .offset(pagination)
        .orderBy("id", "asc")

        if(!response.length) {
            erroCode = 404
            throw new Error("Employee Not Found")
        }

        res.send(response)

    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
})
