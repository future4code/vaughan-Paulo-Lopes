CREATE TABLE user_olimpiada (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    competition VARCHAR(255) NOT NULL,
    score DECIMAL NOT NULL,
    unity VARCHAR(255) NOT NULL
);

SELECT * FROM user_olimpiada
WHERE competition = "natação"
ORDER BY score ASC
LIMIT 4;

DROP TABLE user_olimpiada;

