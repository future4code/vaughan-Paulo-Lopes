//1.a)
// const minhaString: string = "Oi eu sou uma String"

// Da um erro, pois a variavel foi tipada como string. Então number nao vai funcinar


// 1.b)

// const meuNumber: number | string = "Ola", 2

// Usando UnionType. Usando UnionType conseguimos atribuir a variavel varios possibilidades de tipo


//1.c)

type person = {
    name: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    AZUL = "AZUL",
    VERMELHO = "VERMELHO",
    PRETO = "PRETO"
}

const paulo: person = {
    name: "Paulo",
    idade: 20,
    corFavorita: CorFavorita.AZUL
}

const yasmin: person = {
    name: "Yasmin",
    idade: 20,
    corFavorita: CorFavorita.VERMELHO
}

const wagner: person = {
    name: "Wagner",
    idade: 27,
    corFavorita: CorFavorita.PRETO
}

type Users = person[] 

const userList: Users = []

userList.push(paulo)
userList.push(yasmin)
userList.push(wagner)

console.table(userList)

