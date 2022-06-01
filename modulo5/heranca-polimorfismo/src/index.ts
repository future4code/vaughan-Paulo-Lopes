//------------Exercício 1------------Exercício 1------------Exercício 1------------Exercício 1------------Exercício 1------------Exercício 1------------Exercício 1

//1.a) Não. A propriedade "password" está como private, então não é acessivel fora da classe.
//1.b) 1 vez so.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
          return `Olá, bom dia. Meu nome é ${this.name}`
      }
  }

let paulo: User =  new User("1", "paulo@gmail.com", "Paulo", "12345")

// console.log(paulo)

//------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2

//2.a) Uma vez.
//2.b) Duas vezes. Porque "Custumer" é uma classe herdeira de "User"

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

let pauloCart: Customer = new Customer("10", "paulo@gmail.com", "Paulo", "12345", "123456789")

// console.log(pauloCart)

//------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3

//3.a) Não daria pra chamar password porque ele está privado em "User" e para chamar uma propriedade do elemento pai em um elemento filho é necessario
//"tipar" a propriedade com protected

// console.log(pauloCart.getCreditCard())
// console.log(pauloCart.getEmail())
// console.log(pauloCart.getId())
// console.log(pauloCart.getName())

//------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4

// Metodo adicionado na funcao do num.1

// console.log(pauloCart.introduceYourself())

//------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5

//Acabou que eu ja tinha implementado a alteração no método adiantamente.

// console.log(pauloCart.introduceYourself())



//------------Polimorfismo------------Polimorfismo------------Polimorfismo------------Polimorfismo------------Polimorfismo------------Polimorfismo------------Polimorfismo

//2) Consegui imprimir todas as propriedades.

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;

    calculateBill(): number
}

const char1: Client = {
    name: "Paulo",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}

// console.log(char1.calculateBill())
// console.log(char1.consumedEnergy)
// console.log(char1.name)
// console.log(char1.registrationNumber)

//------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2------------Exercício 2

//2.a) "Não foi possivel criar uma instancia de uma classe abstrata"
//2.b) Se ela continuar abstrata, nada. Mas para criar uma instancia da classe "Place", deveriamos tornar ela publica (ou so tirar o abstract)

export abstract class Place {
    constructor (protected cep: string) {}

    public getCep(): string  {
        return this.cep
    }
}

// const teste: Place = new Place () 

//------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3------------Exercício 3

//3.a) Resposta na 2.b

//3.b) Porque ela foi criada para estar representando um tipo de informacao que so abstrai e armazena as caracteristicas em comun de um conjunto de outras classes.

//3.c) 3.b

export class Residence extends Place {
    constructor(protected residentsQuantity: number, cep: string) {
        super(cep)
    }

    getResidentsQuantity (): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(protected floorsQuantity: number, cep:string) {
        super(cep)
    }

    getFloorsQuantity():number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(protected machinesQuantity: number, protected cep: string) {
        super(cep)
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

let pauloHome: Residence = new Residence(4, "24715532")
let pauloCommerce: Commerce = new Commerce(2, "12309123098" )

console.log(pauloCommerce.getCep())


//------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4------------Exercício 4

//4) Metodo para calcular o valor da energia, e de pegar o CPF

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

    public getCpf(): string {
        return this.cpf
    }
}

//------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5------------Exercício 5

//5.a) Praticamente tudo, não muda muita coisa não
//5.b) So a quantidade paga de energia, e o cpf mudou para cnpj

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    getCnpj(): string {
        return this.cnpj
    }
}

//------------Exercício 6------------Exercício 6------------Exercício 6------------Exercício 6------------Exercício 6------------Exercício 6------------Exercício 6

//6.a) Industry, porque estamos referenciando um cliente industrial
//6.b) Client, porque ele tambem é um tipo de cliente
//6.c) Porque são informações fixas, não queremos muda-las, apenas consultar

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    getIndustryNumber (): string {
        return this.industryNumber
    }
    calculateBill(): number {
        return ( 
            (this.consumedEnergy * 0.45) + (this.machinesQuantity * 100) 
        )
    }
}


