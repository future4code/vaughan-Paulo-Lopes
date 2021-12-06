// Exercicio de interpretação

// Q1 

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h


// Q2

// Juca
// Juba
// Jubo

// Ela repete tudo do bloco (não sei se é do bloco, mas sei que ela faz repetir tudo xD)


// Q3

// false
// Undefined, por que não foi definido altura dento do bloco

//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Exercicio de escrita

// Q1

const pessoa = {
    nome: "Paulo",
    apelidos: ["Paulinho", "Tarso", "Jubisbalde"],
}

function objeto (_nome) {
    const pessoa = {
        nome: "Paulo", 
        apelidos: ["Paulinho", "Tarso", "Jubisbalde"],
}
    "Eu sou Paulo, mas pode me chamar de: Paulinho, Tarso ou Jubisbalde"
}

//console.log (objeto)

const novaPessoa =  {
    ...pessoa,
    apelidos: "Xupinga, Meta Tarso, Lapis",
}

let pessoa1 = objeto (novaPessoa)

console.log (objeto) 
