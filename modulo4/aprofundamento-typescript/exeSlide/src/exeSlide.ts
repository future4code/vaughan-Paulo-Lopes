//Exercicio 1

type Person = {
    id: string,
    name: string, 
    email: string,
    password: string,
    role?: Role

}

type AdminAccount = {
    account: string,
    permission: boolean
}

type NormalAccount = {
    account: string,
    permission: boolean
}

enum Role {
    ADMIN = "Admin",
    NORMAL = "Normal",
}

type UserInfo = Person & NormalAccount
type AdminInfo = Person & AdminAccount

type Users = AdminInfo[] & UserInfo[]

const paulo: AdminInfo = {
    id: "1",
    name: "Paulo",
    email: "paulo@gmail.com",
    password: "paulolabenu",
    account: "paulolopest",
    role: Role.ADMIN,
    permission: true
}
const parlo: UserInfo = {
    id: "1",
    name: "Parlo",
    email: "parlodomal@gmail.com",
    password: "parloevil",
    account: "parlolapisb",
    role: Role.NORMAL,
    permission: false
}

const userList: Users = []

userList.push(paulo)
userList.push(parlo)

console.table(userList)
