1.a) Ele vai deletar a coluna "salary"

1.b) Ele mudou o nome de gender para sex (com 6 caracteres ao maximo)

1.c) Agora ele mudou o nome para gender (com 255 caracteres ao maximo)

1.d) Alter Table Actor CHANGE gender gender VARCHAR (100)

---------------------------------------------------------------------------------------------------------------------------------------------------------------

2.a) UPDATE Actor SET name= "" and birth_date = "" where id = 003

2.b) Update Actor SET name = "JULIANA PAES" where name = "Juliana Paes" / Update Actor SET name = "Juliana Paes" where name = "JULIANA PAES"

2.c) Update Actor set name = "Wagner", birth_date = "1994=10-30", salary = 1, gender = "male"  where id = 004


2.d) O meu atualizou um usuario com ID = 20 (que nao existe), mas nas especificações, mostra que nenhuma lionha foi alterada.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

3.a) Delete From Actor where name = "Fernanda Montenegro"

3.b) Delete From Actor where gender = "male" and salary > 1000000

---------------------------------------------------------------------------------------------------------------------------------------------------------------

4.a) Select MAX(salary) from Actor

4.b) Select MAX(salary) from Actor where gender = "female"

4.c) Select COUNT(*) from Actor where gender = "female"

4.d) Select SUM(salary) from Actor

---------------------------------------------------------------------------------------------------------------------------------------------------------------

5.a) Ele mostrou a quantidade de Atores baseado no seu genero (e ordenou tambem)

5.b) Select id, name from Actor order by name desc

5.c) Select * from Actor order by salary

5.d) Select * from Actor order by salary desc limit 3

5.e) Select AVG(salary), gender from Actor group by gender (so esqueci do segundo gender depois de AVG af)

---------------------------------------------------------------------------------------------------------------------------------------------------------------

6.a) Alter Table Movies add playing_limit_date varchar(255) 

6.b) Alter Table Movies change critic critic float

6.c) Update Movies set playing_limit_date = CURDATE() where name = "Arcane"; / Update Movies set playing_limit_date = "2014-08-24" where name  = "Interstellar";

6.d) Tambem consegui atualiza, mas no console mostra que nenhuma linha foi alterada
