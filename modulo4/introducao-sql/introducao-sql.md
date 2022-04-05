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

4.d) 
4.b)
