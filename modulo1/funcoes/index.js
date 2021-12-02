// Exercicio de interpretação

// Q1

// 20 e 50
// Ela retornaria direto no valro 

// Ela seria registrada, mas não apareceria nada no console


// Q2

// Ela deixa tudo em minusculo e procura a palavra cenoura
// eu gosto de cenoura, true
// cenoura é bom pra vista, true
// cenouras crescem na terra, true


const nomeDU = prompt ("Qual é o seu nome?")
const idadeDU = prompt ("Qual é sua idade?")
const cidadeDU = prompt ("De qual estado você é?")
const formacaoDU = prompt ("Você é um estudante ou professor?")

function formartar  (dados) {
    dados = nomeDU
    dados = idadeDU
    dados = cidadeDU
    dados = formacaoDU 
    dados = (`Eu sou ${nomeDU}, tenho ${idadeDU}, moro na cidade de(o) ${cidadeDU} e eu sou um(a) ${formacaoDU}.`)
    
    return dados
}
console.log (dados)

