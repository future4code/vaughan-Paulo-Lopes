import axios from "axios";

const baseUrl = "https://labenews.herokuapp.com"

//------------EXERCICIO 1------------EXERCICIO 1------------EXERCICIO 1------------EXERCICIO 1------------EXERCICIO 1------------EXERCICIO 1------------EXERCICIO 1

//1.a) Vamos bater no endpoint "https://labenews.herokuapp.com/subscribers"

//1.b) Falando que ela é uma "Promise<any[]>" (não entendi mt bem)

//1.c) 

// async function getSubs():Promise <any> {
//     const result = await axios.get(`${baseUrl}/subscribers`)
//     return (console.log(result.data))
// }

//------------EXERCICIO 2------------EXERCICIO 2------------EXERCICIO 2------------EXERCICIO 2------------EXERCICIO 2------------EXERCICIO 2------------EXERCICIO 2

//1.a) A arrow function evita mais erros do que as funções normais (lembro do Flavio falar isso em alguma aula, mas acredito que não seja isso n)

//1.b)

// const getSubs = async ():Promise <any> => {
//     const result = await axios.get(`${baseUrl}/subscribers`)
//     console.log(result.data)
// }

// getSubs()

//------------EXERCICIO 3------------EXERCICIO 3------------EXERCICIO 3------------EXERCICIO 3------------EXERCICIO 3------------EXERCICIO 3------------EXERCICIO 3

// 3.a) Sim
// 3.b) Para deixar o codigo mais "inteligivel" e evitar futuros erros

// 3.c)

type user = {
    id: string,
    name: string,
    email: string
}

const getSubs = async ():Promise <user[]> => {
    const result = await axios.get(`${baseUrl}/subscribers`)
    return result.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

getSubs()

//------------EXERCICIO 4------------EXERCICIO 4------------EXERCICIO 4------------EXERCICIO 4------------EXERCICIO 4------------EXERCICIO 4------------EXERCICIO 4

//4.a) Do tipo put; porque já tem algo criado no endpoint, então nos vamos so edita-los

//4.b) 

const createNews = async (
    title: string, 
    content: string, 
    date: number):Promise<any> => {
        await axios.put(`${baseUrl}/news`, {
            title: title,
            content: content,
            date: date
        })
}

createNews("Teste", "Esse é um teste de noticia", 21938192)

//------------EXERCICIO 5------------EXERCICIO 5------------EXERCICIO 5------------EXERCICIO 5------------EXERCICIO 5------------EXERCICIO 5------------EXERCICIO 5

// const sendNotification = async(
//     users: user[],
//     message: string
// ):Promise<any> => {
//     try {

//         for (const user of users) {
//             await axios.post(`${baseUrl}/notifications`, {
//                 subscriberId: user.id,
//                 message
//             }) 
//         }

//         console.log(`A mensage: "${message}" foi notificada a todos os users`)

//     } catch (error: any) {
//         console.log(error.message)
//     }
// }

//------------EXERCICIO 6------------EXERCICIO 6------------EXERCICIO 6------------EXERCICIO 6------------EXERCICIO 6------------EXERCICIO 6------------EXERCICIO 6

//6.a) Ele recebe um array de promise e retorna uma promise que se resolve em um array de respostas 

//6.b) Ganho de performance

//6.c)
    const sendNotification = async(
        users: user[],
        message: string
    ):Promise<any> => {
        try {
            
            const result = users.map((user) => {
                return axios.post(`${baseUrl}/notifications`, {
                    subscribersId: user.id,
                    message: message
                })
            })

            await Promise.all(result)

        } catch {
            console.log("Error")
        }
    }