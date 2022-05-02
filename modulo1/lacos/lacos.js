// ----------------Exercicio de interpretação---------------------Exercicio de interpretação-------------------Exercicio de interpretação------------------Exercicio de interpretação

// Q1 
// Enquanto o valor de i for menor ou igual que 5 ele vai adicionar 1 valor a i. O resultado no console é 10.


//Q2
//2.a) Ele vai imprimir todos os numero maiores que 18 armazenado no array lista
//2.b) Sim, não é o mais recomendado, mas é o suficiente, o jeito de fazer isso é:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero >= lista.length -1) {
// 		console.log(numero)
// 	}
// }

//Q3 ****

//---------------------Exercicio de escrita------------------------Exercicio de escrita---------------------------Exercicio de escrita-----------------------Exercicio de escrita

//Q1
// let bixinhos = Number(prompt("Quantos bixinhos voce tem?"))

// function compararBixinhos () {
//     if (bixinhos == 0) {
//         alert("Vooce nao tem")
//     } else if (bixinhos > 0) {
//         for (let i = 1; i<= bixinhos; i++) {
//            const nomes = prompt("Qual e o nome")

//            const arrayNome = []
//             arrayNome.push(nomes)
//             console.log(arrayNome)
//         }  
//     }

// }
// compararBixinhos()


//Q2

// let numeros = [48, 124, 23, 451, 23, 645, 34, 12]

// function imprimirValorOriginal () {
//     console.log(numeros)
// }
// imprimirValorOriginal()

// function divide10 () {
//     for (let i= 0; i <= numeros.length -1; i++) {
//         let teste = numeros[i]
//         console.log(teste / 10)
//     }
// }

// divide10()

// function arrayPares () {
//     for (let i = 0; i <=numeros.length -1; i++) {
//         let divisao = numeros[i] / 1 
//         if (divisao % 2 === 0) {
//             const arrayDePares = [divisao]

//             console.log(arrayDePares)
//         }
//     }
// }

// arrayPares()

// function imprimirString () {
//     for (let i = 0; i <= numeros.length - 1; i++) {
//         console.log(`O valor do index é ${numeros[i]}`)
//     }
// }

// imprimirString()

// function maiorMenor () {
//     let maior = 0
//     let menor = 0
//     for (let i = 0; i <= numeros.length - 1; i++) {
//         if (maior < numeros[i]) {
//             maior = numeros[i]
//         }
//         if (menor < numeros[i]) {
//             menor = numeros[i]
//         }

//         console.log(`O maior numero é ${maior}`)
//     }
// }

// maiorMenor()