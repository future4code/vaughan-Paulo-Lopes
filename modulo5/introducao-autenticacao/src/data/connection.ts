import knex from "knex";

const connection = knex ({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "21712944-paulo-lopes",
        password: "rSkTJ4uk#%xnHhzyR6Zf",
        database: "vaughan-21712944-paulo-lopes",
        multipleStatements: true
    }
})

export default connection
