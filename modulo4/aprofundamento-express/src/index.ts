import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.listen (3003, () => {
    console.log("Roda piao MA.OE")
})

//---------------------------------------------------------------------------------------------

//Exercicio 1

app.get("/ping", (req, res) => {
    res.send("Pong")
})

//Exercicio 2

type Task = {
    userId: number, 
    id: number,
    title: string,
    completed: boolean
}

//Exercicio 3

const tasks: Task[] = [
    {
        userId: 1, 
        id: 1,
        title: "Dormir",
        completed: false
    },
    {
        userId: 2, 
        id: 2,
        title: "Estudar",
        completed: false
    },
    {
        userId: 3, 
        id: 3,
        title: "Jogar",
        completed: true
    },
]

//Bonus

app.get ("/tasks", (req, res) => {
    res.send(tasks)
})

//Exercicio 4 

app.get("/completedTasks", (req, res) => {
    const completedTask: Task[] = tasks.filter((task) => {
        if (task.completed === true) {
            return task.title
        }
    })
    
    res.send(completedTask)
})

//Exercicio 5

app.post("/addTask/", (req, res) => {

    const newTask: Task = {
        userId: Number(req.headers.authorization),
        id: 4,
        title: req.body.title,
        completed: req.body.completed
    }

    tasks.push(newTask)

    res.send(tasks)
})

//Exercicio 6

app.put ("/list/:postId", (req, res) => {

    const postId = Number(req.params.postId)
    
    const editTask = tasks.filter((task) => {
        return task.id === postId
    }).map ((task) => {
        return task = {
            userId: task.userId,
            id: task.id,
            title: task.title,
            completed: !task.completed
        }
    })

    res.send(editTask)
}) 

//Exercicio 7

app.delete ("/deleteTask/:taskId", (req, res) => {
    const taskId = Number(req.params.taskId)

    const newList = tasks.filter((task) => {
        return task.id !== taskId
    })

    res.status(220).send(newList)
})

// Exercicio 8

app.get ("/userTasks/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const taskList = tasks.filter ((task) => {
        return userId === task.id
    }).map ((task) => {
        return task.title
    })

    res.send(taskList)
})