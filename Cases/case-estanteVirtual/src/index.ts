import { app } from "./services/App";
import { userController } from "./types/Classes";

app.post("/registerUser", userController.signup)

app.get("/swimming", userController.getSwimmingWinner)
app.get("/running", userController.getRunningWinner)
app.get("/dart", userController.getDartWinner)
app.get("/olympics", userController.getWinner)