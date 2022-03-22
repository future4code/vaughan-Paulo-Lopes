// Exercicio 3

const tasks = ["Wash the dishes", "Sleep"]
const addTask = tasks.push((process.argv[2]))

console.log(`A tarefa ${process.argv[2]} foi adicionada com sucesso`)
console.log(tasks)