function calculation (num1: number, num2: number) {
    const firstNumber: number = num1
    const secondNumber: number = num2

    const sum: number = num1 + num2
    const decrease: number = num1 - num2
    const multiply: number =  num1 * num2
    const divide: number = num1/num2


    console.log(`The sum of the number is ${sum}. The subtraction of the number is ${decrease}. The multiply of the number is ${multiply} and the divide is ${divide}`)
}

calculation(5, 5)