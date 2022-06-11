import { ProductBusiness } from "../business/ProductBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { ProductController } from "../controller/ProductController";
import { UserController } from "../controller/UserController";
import { ProductDatabase } from "../data/ProductDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const idGenerator = new IdGenerator()
export const hashManager = new HashManager()
export const authenticator = new Authenticator()

export const userController = new UserController()
export const userBusiness = new UserBusiness()
export const userDatabase = new UserDatabase()

export const productDatabase = new ProductDatabase()
export const productBusiness =  new ProductBusiness()
export const productController = new ProductController()
