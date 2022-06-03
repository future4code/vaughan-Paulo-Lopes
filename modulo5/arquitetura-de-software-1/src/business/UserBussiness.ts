import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { USER_ROLES } from "../types/User";

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatase = new UserDatabase()
const authenticator = new Authenticator()

export class UserBussines {
  signup = async (
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
  ) => {

    if(!name || !email || !password || !role) {
        throw new Error ("Incorrect input. Verify the inputs")
    }

    const id: string = idGenerator.generateId() 
    const cypherPassword = await hashManager.createHash(password)
    
    await userDatase.insertUser({
        id: id,
        name: name,
        email: email,
        password: cypherPassword,
        role: role 
    })
  }

  login = async(email: string, password: string) => {

    if(!email || !password) {
        throw new Error ("Incorrect login")
    }

    const user = userDatase.selectUserByEmail(email)

    if(!user) {
        throw new Error("The user does not exist")
    }

    const validationPassword: boolean = await hashManager.compare(password, (await user).password)

    if(!validationPassword) {
        throw new Error("Invalid Password")
    }

    const token = authenticator.generateToken({
        id:(await user).id,
        role: (await user).role
    })

    return token
  }

  getUsers = (token: string) => {
    if(!token) {
        throw new Error("Invalid token")
    }
    const response = userDatase.getUsers()

    return response
  }

  deleteUser = async (token: string, id: string) => {
      const user = authenticator.getTokenData(token)
      if(!token){
          throw new Error("Invalid token")
      }

      if(!id) {
          throw new Error("Invalid id")
      }

      if(user.role !== "Administrator") {
        throw new Error("Only Admin can delet accounts")
      }
      
      const response = userDatase.deleteUser(id)
      return response
  }
}
