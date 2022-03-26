type account = {
    name: string,
    email: string,
    role: ROLE
}

enum ROLE {
    ADMIN = "Admin",
    USER = "User"
}

const users: account[] = [
        {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
        {name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
        {name: "Aline", email: "aline@email.com", role: ROLE.USER},
        {name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
        {name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
        {name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function takeAdminAccount () {
    users.filter((user) => {
        if (user.role === ROLE.ADMIN) {
            const adminList = [user]
            console.table(adminList)
        }
    })
}


takeAdminAccount()
