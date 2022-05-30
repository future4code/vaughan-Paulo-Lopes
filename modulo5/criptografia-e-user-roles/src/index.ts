import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import { app } from "./data/app"
import { signUp } from "./endpoints/signUp"
import { login } from "./endpoints/login"
import { getUserInformation } from "./endpoints/getInformation"



// export const signUp = async(req: Request, res: Response): Promise <any> => {
//     let erroCode:number = 404
//     try {

        

//     } catch(error: any) {
//         res.status(erroCode).send(error.sqlMessage || error.message)
//     }
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//1.a) Round é o tempo de execução do algoritmo, quando maior o tempo mais seguro. Quanto mais tempo, mais a aplicacao carrega, diminuindo o desempenho
// logo, temos que ter um balanço entre tempo e segurança // Salt é uma string gerada aleatoriamente que é adicionada na senha para evitar rainbow table.

//1.b)
export class HashManager {
    generateHash = (plainText: string): string => {
        const cost:number = 12
        const salt:string = genSaltSync (cost)
        const cypherText: string = hashSync(plainText, salt) 

        return cypherText
    }

    comparaHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}


//----------Exercicio 2------------Exercicio 2----------Exercicio 2----------Exercicio 2----------Exercicio 2----------Exercicio 2----------Exercicio 2

//2.a) o cadastro, para que as contas criadas já estejam protegidas.

//2.b)
app.post("/user/signup", signUp)

//2.c)
app.post("/user/login", login)


//----------Exercicio 3------------Exercicio 3----------Exercicio 3----------Exercicio 3----------Exercicio 3----------Exercicio 3----------Exercicio 3

//3.a) ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal";

//3.b) types.ts e uuid.ts

//3.c) signup.ts

//3.d) login.ts

//----------Exercicio 4------------Exercicio 4----------Exercicio 4----------Exercicio 4----------Exercicio 4----------Exercicio 4----------Exercicio 4

//4)
app.get("/user/profile", getUserInformation)