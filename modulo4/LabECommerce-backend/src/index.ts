import express from "express"
import cors from "cors"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers"
import { createProduct } from "./endpoints/createProduct"
import { getAllProducts } from "./endpoints/getAllProducts"
import { buyProduct } from "./endpoints/buyProduct"
import { userCart } from "./endpoints/userCart"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("ROOOOOOOOOOODA")
})

//-------Cadastro de usuário-------Cadastro de usuário

app.post("/users", createUser)


//--------Busca por todos os usuários--------Busca por todos os usuários

app.get("/users", getAllUsers)


//-------Cadastro de produto-------Cadastro de produto

app.post("/products", createProduct)


//--------Busca por todos os produtos--------Busca por todos os produtos

app.get("/products", getAllProducts)


//--------Registro de compra--------Registro de compra

app.post("/purchases", buyProduct)


//--------Busca das compras de um usuário--------Busca das compras de um usuário

//Eu dei uma personalizada no endpoint, ao inves dele retornar varios ID's e a quantidade de produto só, eu fiz um join pra ele retornar o email do user, o nome do produto e a quantidade. :D

app.get("/purchases/:userId", userCart)


//---------------DESAFIOS---------------DESAFIOS---------------DESAFIOS---------------DESAFIOS---------------DESAFIOS---------------DESAFIOS

//-------------Busca por todos os produtos--------------Busca por todos os produtos

// Como eu vou editar o endpoint, eu voud deixar o antigo salvo aqui comentado.

// export const getAllProducts = async(req: Request, res: Response): Promise<any> => {
//     let erroCode:number = 400
//     try {  
//         const response = await connection("labecommerce_products")
//         res.send(response)

//     } catch (error: any) {
//         res.status(erroCode).send(error.sqlMessage || error.message)
//     }
// }