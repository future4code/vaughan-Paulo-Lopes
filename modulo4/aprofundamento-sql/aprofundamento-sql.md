Exercicio 1

1.a) Ele vai apagar a coluna "salary" da tabela.

1.b) Ele mudou o nome da coluna "gender(255)" para "sex(6)".

1.c) Agora ele alterou gender para gender(255)

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 2

2.a) 
UPDATE Actors
SET name =  "Chris Evans", birth_date = "1950-11-12"
WHERE id = 003;

2.b)
SELECT UPPER(name) FROM Actors
WHERE name = "Juliana Paes";

SELECT LOWER(name) FROM Actors
WHERE name  = "Juliana Paes";

2.c)
UPDATE Actors
SET name = "Henrique", salary = "40000", birth_date = "1972-08-13", gender = "male"
WHERE id = 005;

2.d) Ele validou como concluido (sinalzinho verde), mas nenhuma row foi afetada.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 3

3.a) 
DELETE FROM Actors
WHERE name = "Fernanda Montenegro";

3.b)
DELETE FROM Actors
WHERE gender = "male" and salary > 1000000;

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 4

4.a) 
SELECT MAX(salary) FROM Actors;

4.b) 
SELECT MIN(salary) FROM Actors
WHERE gender = "female";

4.c)
SELECT COUNT(*) FROM Actors
WHERE gender = "female";

4.d)
SELECT SUM(salary) from Actors;

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 5

5.a) Ele agrupou os elementos da tabela por gênero.

5.b)
SELECT id, name FROM Actors
WHERE gender = "male"
ORDER BY name DSC;

5.c)
SELECT * FROM Actors
ORDER BY salary ASC;

5.d) 
SELECT * FROM Actors
ORDER BY salary DESC
LIMIT 3;

5.e)
SELECT AVG(salary) as "Média", gender
FROM Actors
GROUP BY gender; 

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 6

6.a)
ALTER TABLE Movies
ADD playing_limit_time DATE NOT NULL 
DEFAULT "2022-01-01";

6.b) 
ALTER TABLE Movies
CHANGE rating rating INT NOT NULL;

6.c) 
UPDATE Movies
SET playing_limit_time = "2022-12-12"
WHERE name = "Tropa de ELite";

UPDATE Movies
SET playing_limit_time = "2020-12-12"
WHERE name = "Doce de Mãe";

6.d) E erro da a resposta é "Coluna "rating" desconhecida na lista de campos". Como não existe usuario, ele nao consegue pesquisar.

------DESAFIOS---------------------------------DESAFIOS-------------------------------------DESAFIOS----------------------------------DESAFIOS-----------------

Exercicio 7

7.a) 3

SELECT COUNT(*) FROM Movies
WHERE rating > 7.5;

7.b) 9

SELECT AVG(rating) FROM Movies;

7.c) 1

SELECT COUNT(*) Movies
WHERE playing_limit_time > curdate();

7.d) 1

SELECT COUNT(*) Movies 
WHERE release_date > curdate();

7.e) 10

SELECT MAX(rating) FROM Movies
LIMIT 1;

7.f) 7

SELECT MIN(rating) FROM Movies
LIMIT 1;

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Exercicio 8

8.a)

SELECT * FROM Movies 
ORDER BY name ASC;

8.b)

SELECT * FROM Movies 
ORDER BY name DESC
LIMIT 5;

8.c)

SELECT * FROM Movies
ORDER BY release_date DESC;

8.d)

SELECT * FROM Movies
ORDER BY rating DESC;