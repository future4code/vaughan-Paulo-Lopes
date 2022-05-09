import express, { application } from "express";
import cors from "cors";
import { User, users } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log("Bagui que gira mermo, mermão");
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 1

//1.a) Metodo GET
//1.b) Entidade users

app.get("/users", (req, res) => {
  let erroCode = 400;

  try {
    if (!users) {
      erroCode = 400;
      throw new Error("List not found. Please, try again later.");
    }

    res.status(200).send(users);

  } catch (error: any) {
    res.status(erroCode).send(error.message);
  }
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 2

//2.a) Eu não passei nenhum parametro '-'. A logica na minha cabeça não precisava de um parametro, então eu nao usei :c
//2.b) Eu garanti que apenas o type que eu queria que fosse impresso por meio de uma condicional.

app.get("/users/admin", (req, res) => {
    let errorCode = 400

    const admins = users.filter((user) => {
        if (user.type === "ADMIN") {
            return users
        }
    })

    res.send(admins)

    try {
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 3 

//3.a) Um path param? Eu nao entendi muito bem a pergunta ;/

app.get("/users/:name", (req, res) => {
    let name: string = req.params.name as string
    let errorCode: number = 400

    const wantedUser = users.find ((user) => user.name.toLowerCase() === name.toLowerCase())

    try {
        if (!wantedUser) {
            errorCode = 400
            throw new Error ("Input name undefined")
        } else if (!req.headers.authorization) {
            errorCode = 407
            throw new Error ("Verify your authorization")
        } else if (name == "") {
            errorCode = 404
            throw new Error ("Input name is empty")
        }

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

    res.send(wantedUser)
})

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 4

//4.a) Não mudou nada, a requisição continuou funcionando
//4.b) Não considero válido. Ainda que funcione, user nomes diferes na requisição não é uma boa prática.

app.post("/users", (req, res) => {
    let errorCode = 404

    const newUser: User = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        age: req.body.age
    }

    try {

        if (!newUser.id) {
            errorCode = 404
            throw new Error ("Input id is empty")

        } else if (!newUser.name || newUser.name == "") {
            errorCode = 404
            throw new Error ("Input name is empty")

        } else if (!newUser.email || newUser.name == "") {
            errorCode = 404
            throw new Error ("Input email is empty")

        } else if (!newUser.type || newUser.name == "") {
            errorCode = 404
            throw new Error ("Input type is empty")

        } else if (!newUser.age || newUser.age <= 0) {
            errorCode = 404
            throw new Error ("Verify the age input")
  
        }

        users.push(newUser)

        res.send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// -------DESAFIOS-------------------------------DESAFIOS--------------DESAFIOS---------------------------DESAFIOS--------------DESAFIOS--------------------------------------------------------------------------------------------

//Exercicio 6 

app.put("/editUser/:id", (req, res) => {
    const id = Number(req.params.id)
    let errorCode = 404

    users.filter ((user) => {
        if (user.id === id) {
            const newUser = {
                id: user.id,
                name: req.body.name,
                email: user.email,
                type: user.type,
                age: user.age,
            }

            users.splice(id, 1)

            users.push(newUser)

            res.send(users[id])
        }

    })

    try {
        if (!id || id > users.length) {
            errorCode = 404
            throw new Error ("Verify the id")
        } else if (!req.body.name) {
            errorCode = 404
            throw new Error ("Verify the name input")
        }

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
    
})

//Exercicio 8 

app.delete ("/users/:id", (req, res) => {
    const id = Number(req.params.id)
    let errorCode = 404
    let finded = false

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(id)) {
            users.splice(i, 1)
            finded = true
        }
    }

    try {
        
        if(!id) {
            errorCode = 404
            throw new Error ("Id input is empty")
        } else if (id > users.length) {
            errorCode = 404
            throw new Error ("Id invalid")
        } else if  (!finded) {
            errorCode = 404 
            throw new Error ("User not found. Please verify the id")
        }

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }

    res.send(users)
})

