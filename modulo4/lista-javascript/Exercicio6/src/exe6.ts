type Account = {
    client: string,
    totalBalance: number
    debt: number[] 
}

const bankUsers: Account[] = [
	{ client: "João", totalBalance: 1000, debt: [100, 200, 300] },
	{ client: "Paula", totalBalance: 7500, debt: [200, 1040] },
	{ client: "Pedro", totalBalance: 10000, debt: [5140, 6100, 100, 2000] },
	{ client: "Luciano", totalBalance: 100, debt: [100, 200, 1700] },
	{ client: "Artur", totalBalance: 1800, debt: [200, 300] },
	{ client: "Soter", totalBalance: 1200, debt: [] }
]



function usersInDebt () {
    bankUsers.filter ((client) => {
        const debtSum = client.debt.reduce(function(soma, i) {
            return soma + i
        })
        if (client.totalBalance < debtSum) {
            const userDebt = [client]
            
            userDebt.map ((client) => {
                client.totalBalance = client.totalBalance - debtSum
                client.debt = []
            })

            console.table(userDebt)
        }
    })
}

usersInDebt()
