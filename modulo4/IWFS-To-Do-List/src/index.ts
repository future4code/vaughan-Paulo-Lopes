import express, {Request, Response} from "express"
import cors from "cors"
import connection from "./connection"

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () => {
    console.log("Definitivamente este é o bagulho que gira")
})

//----------Exercicio 1----------------------Exercicio 1--------------------Exercicio 1-------------Exercicio 1-----------------Exercicio 1--------------------

//Exercicio 1

app.post("/user", async(req: Request, res: Response): Promise<any> => {

    let erroCode = 400

    try {
        if(!req.body.nickname) {
            erroCode = 404
            throw new Error("The nickname input is empty")
        } else if (!req.body.email) {
            erroCode = 404
            throw new Error("The email input is empty")
        }

        await connection("User")
        .insert({
            id: Date.now(),
            nickname: req.body.nickname,
            email: req.body.email
        })

        res.send("User succefully created!")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})


//----------Exercicio 2----------------------Exercicio 2--------------------Exercicio 2-------------Exercicio 2-----------------Exercicio 2--------------------

app.get("/user/:id", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if (!req.params.id || null || undefined || "") {
            erroCode = 404
            throw new Error("The ID input is empty")
        } 

        const result = await connection("User")
        .select("*")
        .where({id: req.params.id})

        if (req.params.id !== result[0].id) {
            erroCode = 404
            throw new Error("Invalid ID. Try again")
        }

        res.send(result[0])

    } catch (error: any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 3----------------------Exercicio 3--------------------Exercicio 3-------------Exercicio 3-----------------Exercicio 3---------------------

app.put("/user/:id", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {

        if(!req.body.nickname) {
            erroCode = 404
            throw new Error("The nickname input is empty")
        } else if (!req.body.email) {
            erroCode = 404
            throw new Error("The email input is empty")
        } else if (!req.params.id) {
            erroCode = 404
            throw new Error("The id is invalid")
        }

        const result = await connection ("User")
        .update({
            nickname: req.body.nickname,
            email: req.body.email
        })
        .where({id: req.params.id})

        

        res.send("User succefully updated")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 4----------------------Exercicio 4--------------------Exercicio 4-------------Exercicio 4-----------------Exercicio 4---------------------

app.post("/task", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.body.title) {
            erroCode = 404
            throw new Error("The input title is empty")
        } else if(!req.body.description) {
            erroCode = 404
            throw new Error("The input description is empty")
        } else if(!req.body.limitDate) {
            erroCode = 404
            throw new Error("The input limitDate is empty")
        }

        await connection("Task")
        .insert({
            id: Date.now(),
            title: req.body.title,
            description: req.body.description,
            limitDate: req.body.limitDate, 
        })

        res.send("Task created")
    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 5----------------------Exercicio 5--------------------Exercicio 5-------------Exercicio 5-----------------Exercicio 5--------------------

app.get("/task/:id", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.params.id) {
            erroCode = 404
            throw new Error("The id input is empty")
        }

        const result = await connection("Task")
        .select("*")
        .where({id: req.params.id})

        if (req.params.id !== result[0].id) {
            erroCode = 404
            throw new Error("Invalid ID. Try again")
        }

        res.send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------DESAFIOS----------------------DESAFIOS--------------------DESAFIOS-------------DESAFIOS-----------------DESAFIOS-----------------------DESAFIOS-

//----------Exercicio 6----------------------Exercicio 6--------------------Exercicio 6-------------Exercicio 6-----------------Exercicio 6--------------------------

app.get("/users", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        const result = await connection("User")
        .select("*")

        res.send(result)

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 7----------------------Exercicio 7--------------------Exercicio 7-------------Exercicio 7-----------------Exercicio 7--------------------------

app.get("/user/:id/tasks", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.params.id) {
            erroCode = 404
            throw new Error("The id input is empty")
        }

        const result = await connection("Task as tsk")
        .select("tsk.*", "nickname").join("User as us", "us.id", "user_id")
        .where({"tsk.id": req.params.id})
        
        if (!result[0]) {
            erroCode = 404
            throw new Error("Invalid ID. Try again")
        }

        res.send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 8----------------------Exercicio 8--------------------Exercicio 8-------------Exercicio 8-----------------Exercicio 8--------------------------

// Eu perdi umas boas 4 horas nessa requisição tentando fazer ela funcionar e não funcionou, por algum motivo eu não consigo pegar o user pelo nickname, so
// pelo id. Tentei com query também, mas sempre deu o mesmo erro "Cannot read property 'id' of undefined"

app.get("/user/:name", async(req: Request, res: Response): Promise <any> => {
    let erroCode = 400

    try {

        const result = await connection("User")
        .select("User.id", "User.nickname")
        .where({"User.nickname": req.params.name})


        res.send(result[0])

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 9----------------------Exercicio 9--------------------Exercicio 9-------------Exercicio 9-----------------Exercicio 9--------------------------

//Não entendi essa questão, eu tenho que atribuir um usuario a uma tarefa? Pq quando eu crio uma task eu ja atribuo ela a um user.

// app.post("/user/addtask", async(req: Request, res: Response):Promise <any> => {

// })

//----------Exercicio 10----------------------Exercicio 10--------------------Exercicio 10-------------Exercicio 10-----------------Exercicio 10--------------------------

// Respondendo a Q9... percebi que fiz besteira. Não era pra eu criar várias da mesma tarefa e cada uma ser atribuida a um user só. Acabou que ficou
// sendo uma relação de 1:1 ao inves de N:M

//Bem, eu ajeitei as Table, agora ela tem algumas tarefas (cada uma sendo diferente da outra), sendo atribuidas a varios users. Deu um trabalhinho :c

// app.get("/task/:id/users", async(req: Request, res: Response):Promise <any> => {
//     let erroCode = 400

//     try {
//         const result = await connection("Task as tsk")
//         .select("title", "nickname", "user_id")
//         .join("User as usr", "usr.id", "tsk.user_id")
//         .where({"tsk.id": req.params.id})

//         res.send(result[0])
//     } catch (error:any) {
//         res.status(erroCode).send(error.sqlMessage || error.message)
//     }
// })

//----------Exercicio 11----------------------Exercicio 11--------------------Exercicio 11-------------Exercicio 11-----------------Exercicio 11--------------------------

// Essa e a mesma questão do Exercicio 5

app.get("/task/:id", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.params.id) {
            erroCode = 404
            throw new Error("The id input is empty")
        }

        const result = await connection("Task")
        .select("*")
        .where({id: req.params.id})

        if (req.params.id !== result[0].id) {
            erroCode = 404
            throw new Error("Invalid ID. Try again")
        }

        res.send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 12----------------------Exercicio 12--------------------Exercicio 12-------------Exercicio 12-----------------Exercicio 12--------------------------

app.put("/task/:id", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.body.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }  else if (!req.params.id) {
            erroCode = 404
            throw new Error("The id is invalid")
        }

        await connection ("Task")
        .update({
            status: req.body.status
        })
        .where({id: req.params.id})

        res.send("Task succefully updated")

    } catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 13----------------------Exercicio 13--------------------Exercicio 13-------------Exercicio 13-----------------Exercicio 13--------------------------

app.get("/task/:status", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.params.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }

        const result = await connection("Task")
        .select("*")
        .where({status: req.params.status})

        res.send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 14----------------------Exercicio 14--------------------Exercicio 14-------------Exercicio 14-----------------Exercicio 14--------------------------

app.get("/task/toDo", async(req: Request, res: Response): Promise<any> => {
    let erroCode = 400

    try {
        if(!req.params.status) {
            erroCode = 404
            throw new Error("The status input is empty")
        }

        const result = await connection("Task")
        .select("*")
        .where({status: "to do"})

        res.send(result[0])

    }catch (error:any) {
        res.status(erroCode).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 19----------------------Exercicio 19--------------------Exercicio 19-------------Exercicio 19-----------------Exercicio 19--------------------------

app.delete("/task/:id", async(req: Request, res: Response): Promise<any> => {
    try {
        await connection("Task")
        .delete()
        .where({id: req.params.id})

        res.send("Task deleted")
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//----------Exercicio 20----------------------Exercicio 20--------------------Exercicio 20-------------Exercicio 20-----------------Exercicio 20--------------------------

app.delete("/user/:id", async(req: Request, res: Response): Promise<any> => {
    try {
        await connection("User")
        .delete()
        .where({id: req.params.id})

        res.send("User deleted")
    } catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// Definitivamente eu não esperava o que aconteceu no projeto kkk teve horas que eu sabia tudo o que tava fazendo, ai depois percebi que fiz besteira. 
// Ai depois achei que não tinha, reescrevi boa parte do codigo. Até o endpoint 10 foi de boas, depois eu reciclei bastante o código. Minhas querys nunca 
// funcinovam... preciso dar uma olhada mais a fundo sobre. Preciso rever a parte de como conectar N:M no codigo. Acho que foi também pq tivemos uma aula 
// RECICLADA de outro professor, ao inves do Flavio. Explicação diferente, exemplos diferentes, conteudo feito de forma TOTALMENTE diferente do que vinha sendo
// feito durante a semana.