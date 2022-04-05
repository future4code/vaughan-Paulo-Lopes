import express from "express"
import { users } from "./data1"
import cors from "cors"

const app = express()

type User = {
    id: number,
    name: string,
    phone: number | string
}

app.use (express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003")
})

app.get("/", (req, res) => {
    res.send("Parabens, voce acessou a porra do exercicio que voce estava travado")
})