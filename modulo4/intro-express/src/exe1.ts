import express from "express"
import { users } from "./data1"
import cors from "cors"

const app = express()

app.use (express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003")
})

app.get("/playlists", (req, res) => {
    const allUsers = users

    const allPlaylists = users.filter ((user) => {
        user.tracks
    })

    res.send(allPlaylists)
})