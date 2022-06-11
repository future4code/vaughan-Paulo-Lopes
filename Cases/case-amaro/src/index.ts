import { app } from "./services/App";
import { productController, userController } from "./models/Classes";

app.post("/createUser", userController.insertUser)
app.post("/login", userController.login)

app.post("/createProduct", productController.insertProduct)
app.get("/products", productController.getProduct)