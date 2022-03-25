//1.a) 
//1.b) Iria configurar o package.json com os caminhos necessarios
//1.c) Não, pois no tsconfig, configuramos para justamente o arquivo TS estar nesta pasta (SRC)
//1.d) Eu não conheço, mas acho que é so você configurar caminhos para varios arquivos ts



type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}