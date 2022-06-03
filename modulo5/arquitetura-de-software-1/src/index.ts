import { app } from "./controller/App";
import { UserController } from "./controller/UserController";

const userController =  new UserController()

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)
app.get("/user", userController.getUsers)
app.delete("/user/:id", userController.deleteUser)