type product = {
    name: string,
    quantity: number,
    value: number | any
}

const products: product[] = [
	{ name: "MacMugffin", quantity: 37, value: 51.040},
	{ name: "Vassoura voadora", quantity: 56, value: 210.0},
	{ name: "Laço da verdade", quantity: 32, value: 571.5},
	{ name: "O precioso", quantity: 1, value: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, value: 17},
	{ name: "Plumbus", quantity: 13, value: 140.44},
	{ name: "Pokebola", quantity: 200, value: 99.9915}
]

function adjustedPrice () {
    products.map ((product) => {
        product.value = "R$ " + product.value.toFixed(2).replace(".", ",")
    })

    console.log(products)
}

adjustedPrice()