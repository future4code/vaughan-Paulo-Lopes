1.a) Varchar, para declarar que vai ser uma string, seguido de um parametro que vai especificar a quantidade de caracteres; Date representa uma data

1.b) Show Database: Ele me mostrou o database, com algum tipo de verificação / Show Tables: Ele mostrou as tables no banco de dados, que no caso era a "Actor" e a "Friends" (uma pessoal)

1.c) O Describe me mostra a tabela com seus valores 'pré-setados', mostrando o nome das colunas e o tipo deles.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2.a) Gloria Pires criada.

2.b) "Entrada duplicada na Primary Key". Eles tem o mesmo ID, então deu erro.

2.c1) Faltou a data de nascimento e o genero no parametro

2.c2) Faltou o nome no parametro

2.c3) Faltou colocar aspas nos elementos VARCHAR

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3.a) SELECT * FROM Actor Where gender = "female"

3.b) SELECT salary FROM Actor WHERE name = "Tony Ramos"

3.c) Como nenhum genero foi recebido como "invalid" a table retornou vazia, pos nenhum desses "Atores" foi declarado com esse tipo de genero.

3.d) SELECT id, name, salary FROM Actor Where salary < 500000

3.e) A coluna nome nao existe, o certo é "name" / SELECT id, name from Actor WHERE id = "002"

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4.a) Selecione de atores onde o nome comeca com "A" e "J" e o salario é maior 300000

4.b) SELECT * FROM Actor Where name NOT LIKE "A%" and salary > 350000

4.c) SELECT * FROM Actor where (name like "%G%" or name like "%g%") 

4.d) SELECT * from Actor where (name like "%A%" or name like "%a%" or name like "%G" or name like "%g%") and (salary between 350000 and 900000) (Quase acertei, so esqueci do Between)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5.a) A query text faz com que o tamanho da linha aumente (até 2gb)

5.b) Eu acabei criando varios filmes sem querer, que nao tinha nada v com os exercicios

5.c) Eu acabei criando varios filmes sem querer, que nao tinha nada v com os exercicios

5.d) Eu acabei criando varios filmes sem querer, que nao tinha nada v com os exercicios

5.e) Eu acabei criando varios filmes sem querer, que nao tinha nada v com os exercicios

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6.a) Select id, name, critic from Movies where id = 2

6.b) Select * from Movies where name = "Arcane"

6.c) Select id, name, synopsis from Movies where critic > 7

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7.a) Select * from Movies where name like "A%"

7.b) Select * from Movies where (synopsis like "%future%" or name like "%future%") 

7.c) Select * from Movies where release_date < "2022-01-01";

7.d) Select * from Movies where (synopsis like "%future%" or name like "%future%") and critic > 7
