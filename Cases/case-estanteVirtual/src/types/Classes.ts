import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const userController = new UserController()
export const userBusiness = new UserBusiness()
export const userDatabase = new UserDatabase()

export const idGenerator = new IdGenerator()