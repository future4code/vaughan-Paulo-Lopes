CREATE TABLE Classes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    module INT NOT NULL DEFAULT 0
);

CREATE TABLE Student (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    born_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Classes(id)
);

CREATE TABLE Teacher (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL, 
    born_date DATE NOT NULL,
    class_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Classes(id)
);

CREATE TABLE Hobby (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Student(id)
);

CREATE TABLE Specialty (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL DEFAULT 'JS', 
    teacher_id VARCHAR(255),
    FOREIGN KEY (teacher_id) REFERENCES Teacher(id)
);

DESCRIBE Classes;

SELECT * FROM `Specialty`;

UPDATE `Classes`
SET module = 5
WHERE id = 1653440115283;

ALTER TABLE `Teacher`
CHANGE email email VARCHAR(255) NOT NULL UNIQUE;
