type born = {
    day: number | string,
    month: number | string,
    year: number | string
}

function userInfo () {
    const userName: string = "Paulo"
    const userBorn: born = {
        day: 24,
        month: "Agosto",
        year: 2002
    }

    console.log(`Olá me chamo ${userName}, nasci no dia ${userBorn.day} do mês de ${userBorn.month} do ano de ${userBorn.year}`)
}

userInfo()