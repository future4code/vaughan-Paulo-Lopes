import express from "express"
import cors from "cors"
import {products} from "./data"

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, ()=> {
  console.log("The server is running")
})

//Exercicio 1 

app.get("/test", (req, res) => {
  res.send("Esta funcionando. TATAKAE")
})


//Exercicio 2
// data.ts <--


//Exercicio 3

app.post("/addProduct", (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  };

  try {
    if (!newProduct.name) {
      throw new Error ("Insert the name of the product") 
    } else if (!newProduct.price) {
      throw new Error("Insert the price of the product")
    } else if (!req.headers.authorization) {
      throw new Error("Your authorization is wrong. Verify your authorization")
    }

    if (newProduct.price <= 0) {
      throw new Error("The price must be greater than 0")
    }

  } catch (error: any) {
    switch(error.message) {
      case "Insert the name of the product":
        res.status(422).send(error.message)
        break
      case "Insert the price of the product":
        res.status(422).send(error.message)
        break
      case "Your authorization is wrong. Verify your authorization":
        res.status(422).send(error.message)
        break
      case "The price must be greater than 0":
        res.status(422).send(error.message)
        break
      default:
        res.status(500).send(error.message)
        break
    }
  }

  products.push(newProduct)
  res.send(products)
})


//Exercicio 4

app.get("/getAllProducts", (req, res) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Your authorization is wrong. Verify your authorization")
    }
  } catch (error: any) {
    switch(error.message) {
      case "Your authorization is wrong. Verify your authorization":
        res.status(422).send(error.message)
        break
      default:
        res.status(500).send(error.message)
        break
    }
  }
  res.send(products)
}) 


//Exercicio 5

app.put("/editProductPrice/:productId", (req, res) => {
  const productId = req.params.productId

  const editedList = products.filter((pdt) => {
    return pdt.id === Number(productId)
  })
  .map ((pdt) => {
    return [
      (
        pdt = {
          id: pdt.id,
          name: pdt.name,
          price: req.body.price
        }
      ),
      ...products
    ]
  })

  try {
    if (!req.headers.authorization) {
      throw new Error("Your authorization is wrong. Verify your authorization")
    } else if (req.params.productId == null || undefined || !Number) {
      throw new Error ("Insert the ID of product. The id product must be a number")
    } else if (!req.body.price) {
      throw new Error("Insert the product value price")
    } else if (req.body.price !== Number(req.body.price)) {
      throw new Error("The price of product must be a number")
    } else if (req.body.price <= 0) {
      throw new Error("The price must be greater than 0")
    }
  } catch (error:any) {
      switch(error.message) {
        case "Your authorization is wrong. Verify your authorization":
          res.status(422).send(error.message)
          break
        case "Insert the ID of product":
          res.status(422).send(error.message)
          break
        case "Insert the product value price":
          res.status(422).send(error.message)
          break
        case "The price of product must be a number":
          res.status(422).send(error.message)
          break
        case "The price must be greater than 0":
          res.status(422).send(error.message)
          break
        default:
          res.status(500).send(error.message)
      }
  }

  res.send(editedList)
})


//Exercicio 6

app.delete("/deleteProduct/:productId", (req, res) => {
  const productId = req.params.productId
  try {
    let finded = false
    
    for (let i = 0; i < products.length; i++) {
      if(products[i].id === Number(productId)) {
        products.splice(i, 1)
        finded = true
      }
    }

    if (!finded) {
      throw new Error ("Product not find. Verify the ID")
    } else if(!req.headers.authorization) {
      throw new Error ("Authorization is not defined")
    }

    res.send (products)

  } catch (error: any) {
    switch(error.message) {
      case "Product not find. Verify the ID":
        res.status(422).send(error.message)
        break
      case "Authorization is not defined":
        res.status(422).send(error.message)
        break
      default:
        res.status(500).send(error.message)
        break
    }
  }
})