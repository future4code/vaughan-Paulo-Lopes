//Exercicio 1

1.A) O varchar representa uma string e o numero logo após o tamanho maximo dessa string.

Date representa que é uma data.

O primary key representa o "id", quer dizer que aquele valor é o "CPF" do elemento da tabela.


1.b) O "SHOW DATABASE" me entregou uma tabela com as especificações do meu registro no SQL, como: meu schema e meu user.

O "SHOW TABLES" me entregou uma tabela com as tabelas criadas no meu usuario.

1.c) Ele me entregou a tabela com seus valores detalhados.


//Exercicio 2

2.a)

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES (
"002", 
"Glória Pires", 
1200000,
"1963-08-23",
"Female"
);


2.b) Entrada dupliocada para a chave 002. O bloqueio do comando aconteceu por conta do ID ja ser registrado, e como ele é uma primary key, ele deve ser único.


2.c) Foi passado mais valores que não foram especificados no parametro do INSERT

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "Female"
);


2.d) O nome em VALUES não foi passado.

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES (
	"004",
    "Paulo Tarso",
    400000, 
    "1949-04-18",
    "Male"
);


2.e) A data de nascimento não foi passada como string (em aspas)

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES (
	"005",
    "Juliana Paes",
    719333.33,
    "1979-03-26",
    "Female"
);


2.f)

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES (
	"006",
    "Yasmin Conc",
    "10000",
    "2002-11-29",
    "Female"
);


//Exercicio 3


3.a) 

SELECT * FROM Actors
WHERE gender = "female";


3.b) 

SELECT salary FROM Actors
WHERE name = "Tony Ramos";


3.c) O resultado foi uma table vazia. O resultado foi assim porque nenhum usuario foi registrado com o gender "invalid"


3.d) 

SELECT id, name, salary FROM Actors
WHERE salary > 500000;

3.e) O parametro foi passado como "nome" ao inves de "name"

SELECT id, name FROM Actors 
WHERE id = "002";


//Exercicio 4


4.a) Ele vai imprimir de atores, os atores que começam com A ou J e tem o salario maior que 300000

4.b)

SELECT * FROM Actors
WHERE name NOT LIKE "A%" AND salary > 350000;


4.c)

SELECT * FROM Actors
WHERE name LIKE "%g%" OR name LIKE "%G%";


4.d)

SELECT * FROM Actors 
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 950000;



//Exercicio 5

5.a) O valor TEXT serve para armazenar uma string de até 2GB de tamanho. Essa query se trata de uma table que armazena info de filmes.

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);


5.b)

INSERT INTO Movies (id, name, synopse, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    7
);


5.c) Mesma coisa da 5.b só que com valores diferentes
5.d) Mesma coisa da 5.b só que com valores diferentes
5.e) Mesma coisa da 5.b só que com valores diferentes


6.a) 

SELECT id, name, rating FROM Movies
WHERE id = "004";


6.b) 

SELECT * FROM Movies 
WHERE name = "Tropa de ELite";


6.c) 

SELECT id, name, synopse FROM Movies
WHERE rating >= 7;


//Exercicio 7

7.a)

SELECT * FROM Movies 
WHERE name LIKE "%vida%";


7.b)

SELECT * FROM Movies 
WHERE name LIKE "%elite%" OR synopse LIKE "%elite%";


7.c) 

SELECT * FROM Movies 
WHERE release_date < "2022-05-04";


7.d) 

SELECT * FROM Movies 
WHERE (name LIKE "%elite%" OR synopse LIKE "%elite%") AND rating > 7;
