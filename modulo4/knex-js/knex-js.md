import express, {Request, Response} from "express"
import cors from "cors"
import connection from "./connection"

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Sim, esse é o bagui que gira")
})

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 1

1.a) Não entendi muito bem como responder essa pergunta :/

1.b)

app.get("/actors/:name", async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection.raw (`
        SELECT * FROM Actors
        WHERE name LIKE "%${req.params.name}%"
    `)
    
    res.send(result[0])

    } catch (error:any) {
        res.send(error.sqlMessage || error.message)
    }
})


1.c)

app.get("/actors/:gender/count", async(req: Request, res: Response): Promise <any> => {
    try {

        const result = await connection("Actors")
        .count("* as genderCount")
        .where({gender: req.params.gender})

        res.send(result[0])

    } catch (error:any) {
        res.send(error.message)
    }
})

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 2

2.a) 

app.put("/actors/salary/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actors")
        .update({
            salary: req.body.salary,

        }).where({id: req.params.id})

        res.send(`The salary of id: ${req.params.id} was succefully changed`)

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
})


2.b)

app.delete("/actors/:id", async(req: Request, res: Response): Promise<void> => {
    try {
        await connection("Actors")
        .delete()
        .where({id: req.params.id})

        res.send("Actor succefully deleted")

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
})

2.c)

app.get("/actors/:gender/avgSalary", async(req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Actors")
        .avg(`salary as ${req.params.gender} salary AVG`)
        .where({gender: req.params.gender})

        
        res.send(result[0])
    } catch {
        res.status(500).send("Error")
    }
})


-------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 3

3.a)

app.get("/actors/getActorBy/:id", async(req: Request, res: Response): Promise <any> => {
    try {
       const result = await connection("Actors")
        .where({id: req.params.id})

        res.send(result[0])

    } catch {
        res.send("error")
    }
})

3.b)

app.get("/actors/getActorby/:id", async (req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Actors")
        .count("* as genderCount:")
        .where({id: req.params.id})

        res.send(result[0])
    } catch(error:any) {
        res.send("error")
    }
})

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 4

4.a) 

app.put("/actors/:id", async(req: Request, res: Response): Promise <any> => {
    try {
        await connection("Actors")
        .update({salary: req.body.salary})
        .where({id: req.params.id})
    
        res.send("The salary was succefully updated")

    } catch (error: any) {
        res.send(error.message)
    }
})

4.b) 

app.delete("/actors/:id", async(req: Request, res: Response): Promise <any> => {
    try {
        await connection("Actors")
        .delete()
        .where({id: req.params.id})

        res.send("The actors was succefully deleted")
    } catch (error: any) {
        res.send(error.message)
    }
})


--------------DESAFIOS--------------DESAFIOS--------------DESAFIOS--------------DESAFIOS--------------DESAFIOS--------------DESAFIOS--------------DESAFIOS-----

Exercicio 5

5.a)

app.post("/movies", async(req: Request, res: Response): Promise <any> => {
    try {
        await connection("Movies")
        .insert({
            id: Date.now().toString(),
            name: req.body.name,
            synopse: req.body.synopse,
            release_date: req.body.releaseDate,
            rating: req.body.rating,
            playing_limit_time: req.body.playingLimitTime
        })
        
        res.send("Movie succefully add")

    } catch (error:any){
        res.send(error.sqlMessage || error.message)
    }
})


Exercicio 6

app.get("/movies/all", async(req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Movies")

        res.send(result)

    } catch (error: any) {
        res.send(error.message)
    }
})

Exercicio 7

app.get("/movies/:search", async(req: Request, res: Response): Promise <any> => {
    try {
        const result = await connection("Movies")
        .where({name: req.params.search})

        res.send(result)

    } catch (error:any) {
        res.send(error.message)
    }
})

