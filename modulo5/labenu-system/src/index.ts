import knex from "knex";
import cors from "cors";
import express from "express";
import { Request, Response } from "express";
import connection from "./connection";
import { createClass } from "./endpoints/createClass";
import { getClasses } from "./endpoints/getClasses";
import { changeModule } from "./endpoints/changeModule";
import { createStudent } from "./endpoints/createStudent";
import { searchStudent } from "./endpoints/searchStudent";
import { changeClass } from "./endpoints/changeClass";
import { createTeacher } from "./endpoints/createTeacher";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import { changeTeacherClass } from "./endpoints/changeTeacherClass";
import { inSameClass } from "./endpoints/inSameClass";
import { createHobby } from "./endpoints/createHobby";
import { getUserByHobby } from "./endpoints/getUserHobby";
import { getAllHobby } from "./endpoints/getAllHobby";
import { createSpecialty } from "./endpoints/createSpecialty";
import { getAllSpecialty } from "./endpoints/getAllSpecialty";
import { getTeacherBySpecialty } from "./endpoints/getTeacherBySpecialty";

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log(`The serve is running on localhost:3003`)
})

//------------------------------------------------------------------------------------------------------------------------------------------------------------

export class Classes {
    constructor(
        private id: string,
        protected name: string,
        protected module: number
    ) {}
}
export class Office {
    constructor(
        protected id: string,
        protected name: string,
        protected born_date: string,
        protected class_id: string,
    ) {}
}
export class Student extends Office{
    constructor (
        id: string,
        name: string,
        born_date: string,
        class_id: string
    ) {
        super(id, name, born_date, class_id)
    }
}
export class Teacher extends Office{
    constructor (
        id: string,
        name: string,
        born_date: string,
        class_id: string
    ) {
        super(id, name, born_date, class_id)
    }
}


//--------Criar turma--------Criar turma-----------Criar turma--->

app.post("/createClass", createClass)

//--------→ Buscar turmas ativas--------→ Buscar turmas ativas-----------→ Buscar turmas ativas--->

app.get("/class", getClasses)

//--------→ Mudar turma de módulo--------→ Mudar turma de módulo-----------→ Mudar turma de módulo--->

app.put("/class/:id", changeModule)

//--------Criar Estudante--------Criar Estudante-----------Criar Estudante--->

app.post("/createStudent", createStudent)

//--------→ Buscar estudantes através do nome--------→ Buscar estudantes através do nome-----------→ Buscar estudantes através do nome--->

app.get("/student", searchStudent)

//--------→ Mudar estudante de turma--------→ Mudar estudante de turma-----------→ Mudar estudante de turma--->

app.put("/student/:id", changeClass)

//--------Criar Professor--------Criar Professor-----------Criar Professor--->

app.post("/createTeacher", createTeacher)

//--------→ Buscar todas as pessoas docentes--------→ Buscar todas as pessoas docentes-----------→ Buscar todas as pessoas docentes--->

app.get("/teacher", getAllTeachers)

//--------→ → Mudar docente de turma;--------→ → Mudar docente de turma;-----------→ → Mudar docente de turma;--->

app.put("/teacher/:id", changeTeacherClass)

//--------→ → Mesma turma;--------→ → Mesma turma;-----------→ → Mesma turma;--->

//O endpoint nao funcionou muito bem aqui não, não consegui entregar os profs e os alunos, so 1 dos 2
app.get("/sameClass/:id", inSameClass)

//--------→ Usuarios com o mesmo hobby;--------→ Usuarios com o mesmo hobby;-----------→ Usuarios com o mesmo hobby;--->

app.get("/student/:hobby", getUserByHobby)


//--------→ Especialistas em POO;--------→ Especialistas em POO;-----------→ Especialistas em POO;--->

app.get("/specialty/:specialty", getTeacherBySpecialty)





//--------→ Criar hobby;--------→ Criar hobby;-----------→ Criar hobby;--->

app.post("/createHobby", createHobby)

//--------→ Pegar hobby;--------→ Pegar hobby;-----------→ Pegar hobby;--->

app.get("/hobby", getAllHobby)

//--------→ Criar Especialidade;--------→ Criar Especialidade;-----------→ Criar Especialidade;--->

app.post("/createSpecialty", createSpecialty)

//--------→ Pegar Especialidade;--------→ Pegar Especialidade;-----------→ Pegar Especialidade;--->

app.get("/specialty", getAllSpecialty)