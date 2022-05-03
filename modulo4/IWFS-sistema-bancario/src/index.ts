import express from "express";
import cors from "cors";
import { users, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log("É o beyblade");
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 1
// <-- Data.ts

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 2
// <-- Data.ts

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 3
// <-- Data.ts

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 4
// <-- Data.ts

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 5 e 7 e Desafio 1

app.post("/users/newUser", (req, res) => {
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let errorCode = 400;
  let equal = false;

  const newUser: User = {
    name: req.body.name,
    birthDate: req.body.birthDate,
    cpf: req.body.cpf,
    balance: 0,
    extract: [
      {
        value: 0,
        date: 0,
        description: "",
      },
    ],
  };

  for (let i = 0; i < users.length; i++) {
    if (users[i].cpf === req.body.cpf) {
      equal = true;
    }
  }

  try {
    if (!req.body.name) {
      errorCode = 404;
      throw new Error("Name input is missing");
    } else if (!req.body.birthDate) {
      errorCode = 404;
      throw new Error("Birth year input is missing");
    } else if (!req.body.cpf) {
      errorCode = 404;
      throw new Error("CPF input is missing");
    }

    if (year - newUser.birthDate < 18) {
      errorCode = 406;
      throw new Error("The age must be greater than 18");
    }

    if (equal === true) {
      errorCode = 406;
      throw new Error("This CPF its allready registred");
    }
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }

  users.push(newUser);

  res.send("User created succeffully");
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercicio 6

app.get("/users", (req, res) => {
  res.send(users);
});

//--------DESAFIOS--------------------------------DESAFIOS-------------------------------------DESAFIOS---------------------DESAFIOS------------------DESAFIOS-------------------------------

// Desafio 1

// Desafio 1 está implementado junto do metodo post no exercicio 5
// ^
// |

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Desafio 2

//Não sei porque, mas se eu der um post em um usuario e tentar pegar o saldo dele, não vai. Mas, se eu tento pegar do meu usuário mockado(Paulo Tarso), ele funciona.
//Talvez seja por falta dele não estar guardado em um storage? Tipo um didMount, sei lá, até porque o array de users só tem mais de 1 user enquanto o server ta rodando. Enfim, a função ta funcionando, de qualquer forma. :C

app.get("/users/:name/:cpf/balance", (req, res) => {
  const name: string = req.params.name;
  const cpf: number = Number(req.params.cpf);
  let errorCode: number = 400;

  try {
    if (!name) {
      errorCode = 404;
      throw new Error("The name input is empty");
    } else if (!cpf) {
      errorCode = 404;
      throw new Error("The cpf input is empty");
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name && users[i].cpf === Number(cpf)) {
        res.send(`The balance of ${name} is ${users[i].balance}`);
      } else {
        errorCode = 400;
        res.send("User not found");
      }
    }
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Desafio 3

app.put("/users/:name/:cpf/:addBalance", (req, res) => {
  const name: string = req.params.name;
  const cpf: number = Number(req.params.cpf);
  const balance: number = Number(req.params.addBalance);
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let errorCode: number = 400;

  try {
    if (!req.params.name) {
      errorCode = 404;
      throw new Error("Name input is missing");
    } else if (!req.params.addBalance) {
      errorCode = 404;
      throw new Error("Balance input is missing");
    } else if (!req.params.cpf) {
      errorCode = 404;
      throw new Error("CPF input is missing");
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].name === name && users[i].cpf === cpf) {
        const newBalance = {
          value: balance,
          date: year,
          description: `Depósito de ${balance} em dinheiro`,
        };

        users[i].balance = Number(users[i].balance) + balance;
        users[i].extract.push(newBalance);

        res.send(users[i]);
      } else {
        errorCode = 400;
        throw new Error("User not found");
      }
    }
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Desafio 4
//Logica feita no desafio 3 /Logica feita no desafio 3 /Logica feita no desafio 3

// const newBalance = {
//     value: balance,
//     date: year,
//     description: `Depósito de ${balance} em dinheiro`
// }

// users[i].extract.push(newBalance)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Desafio 5
//Eu não entendi bulufas dessa questão. É pra criar o post aonde? '-. Provavelmente minha interpretação ta errada. Mas vou fazer algo parecido, eu acho :C

//É. consegui não :C

// app.post("/users/:cpf/payBills", (req, res) => {
//     let currentTime = new Date();
//     let year = currentTime.getFullYear();

//     const bill = {
//         dueDate: req.body.dueDate,
//         description: req.body.description,
//         value: req.body.value,
//         cpf: req.params.cpf
//     } 

//     if (bill.dueDate - year <=0) {
//         res.send("Payment must be made today")
//     }
// })