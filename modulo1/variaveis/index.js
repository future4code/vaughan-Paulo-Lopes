/*Exercicio de interpretação

Q1.


10
10, 5


Q2.


10, 10, 10


Q3.


horasDeTrabalhoDia
valorDiaria
valorDaHora*/

//Exercicio de escrita

// Q1


/*let nome;
let idade;
console.log (typeof nome);
console.log (typeof idade);*/

// Porque eu não atribuí nenhum valor ao let

nome = prompt ("Qual é o seu nome?");
idade = prompt ("Qual é sua idade?");
console.log (typeof nome, typeof idade);

// Que o resgistro no console virou uma string.

console.log("Olá", nome, "você tem", idade, "anos");


// Q2


const pergunta1 = "Você esá usando azul hoje?";
const pergunta2 = "Você mora em qual Estado do Brasil?"
const pergunta3 = "Qual foi sua melhor experiência cinematográfica?"

const Sim = prompt (pergunta1);
const Rio_de_Janeiro = prompt (pergunta2);
const Arcane = prompt (pergunta3)

console.log (pergunta1, Sim);
console.log (pergunta2, Rio_de_Janeiro);
console.log (pergunta3, Arcane);

let a = 25 
let b = 10

a = b
console.log (a);