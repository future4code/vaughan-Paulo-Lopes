import express, { response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server está rodando trem bala")
})

// ------------------------------------------------------------------------

//Exercicio 1

app.get("/", (req, res) => {
    res.send("Ola do exercicio")
})

//Exercicio 2

type User = {
    id: string | number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercicio 3

const users: User[] = [
    {
        id: 1,
        name: "Paulo Tarso",
        phone: 123456789,
        email: "paulolabenu@gmail.com",
        website: "paulojava.com" 
    },

    {
        id: 2,
        name: "Yasmin Conc",
        phone: 987654321,
        email: "yasminlabenu@gmail.com",
        website: "yasminhtml.com"
    },

    {
        id: 3,
        name: "Wagner Gui",
        phone: 239783921,
        email: "wagnerlabenu@gmail.com",
        website: "wagnercss.com"
    }
]

//Exercicio 4

app.get("/users", (req, res) => {
    res.send(users)
})

//Exercicio 5 

type Post = {
    id: string | number,
    title: string,
    body: string,
    userId: string | number 
}

//Exercicio 6

// Existe uma logica na minha cabeça onde eu ja crio isso dentro de users e puxo o userId direto do ID do usuario. É interessante, mas eu ainda não sei fazer.

const posts: Post [] = [
    {
        id: "a1",
        title: "Brasil e corrupção",
        body: "Brasil é um país corrupto e a culpa é do povo.",
        userId: Date.now()
    },
    {
        id: "b2",
        title: "League of sem vida",
        body: "Eu jogo lol a 8 anos e me arrependo profundamente disso",
        userId: Date.now()
    },
    {
        id: "c3",
        title: "PS5 supremacy",
        body: "I love PS5 and i believe in PS5 supremacy",
        userId: Date.now()
    },
]

//Exercicio 7

app.get("/posts", (req, res) => {
    res.send(posts)
})

//Exercicio 8

app.get("/posts/1", (req, res) => {
    res.send(posts[0])
})

// -------------------------------------------------------------------------------------

//Desafios

//Exercicio 9

app.delete("/posts/", (req, res) => {
    res.send(posts.pop())
    console.log("Post deletado")
})

//Exercicio 10

app.delete("/posts/deleteUser", (req, res) => {
    res.send (users.pop())
    console.log("Usuario deletado com sucesso!")
})