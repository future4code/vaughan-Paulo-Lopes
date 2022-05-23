//1.a) Ele serve pra inicializar a classe, chamamos ele usando a sintaxe "constructor" (como se fosse um Type).

//1.b) A mensagem foi impressa 1 vez só.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  public getCpf() {
    return this.cpf;
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public getBalance() {
    return this.balance;
  }

  public getTransaction() {
    return this.transactions;
  }

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

let paulo: UserAccount = new UserAccount("123456789", "Paulo", 19);

console.log(paulo);

//1.c) Geralmente fazemos uma função get(propriedade) que queremos pegar e deixamos ela publica

//--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2--------------Exercicio 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  getDescription() {
    return this.description;
  }

  getValue() {
    return this.value;
  }

  getDate() {
    return this.date;
  }

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }
}

let pauloBank: Transaction = new Transaction("Comprou ps5", 5000, "2022-08-24");

//--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3--------------Exercicio 3

//3) Quando eu fui colocar o get, eu recebi um erro de que ele não podia ser puxado na class "Bank", so na class
// UserAccount, então tive que criar os getrs e setrs ali em cima. O que acaba fazendo mais sentido, se a classe
// Bank so vai servir pra armazenar varias contas.

class Bank {
  account: UserAccount[];

  constructor(account: UserAccount[]) {
    this.account = account;
  }
}
