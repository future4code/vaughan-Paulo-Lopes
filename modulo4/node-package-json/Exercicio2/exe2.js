//Exercicio 2

const firstNumber = process.argv[2]
const secondNumber = process.argv[3]

const add = Number(firstNumber) + Number (secondNumber)
const decrease = (firstNumber) - (secondNumber)
const multiply = (firstNumber) * (secondNumber)
const divide = (firstNumber) / (secondNumber)

console.log(`The sum of the numbers is ${add}. The subtraction of the numbers is ${decrease}. The multiply of the numberss is ${multiply} and the divide of the numbers is ${divide} `)

