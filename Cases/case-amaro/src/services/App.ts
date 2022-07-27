import express from "express"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(3003, () => {
    if(!server) {
        console.log("Error running server")
    } else {
        console.log("The server is running on port 3003")
    }
})