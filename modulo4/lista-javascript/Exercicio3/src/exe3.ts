type movie = {
    name: string,
    releaseDate: number,
    genre: GENRE,
    critic: CRITRIC
}

enum GENRE {
    FANTASY = "Fantasy",
    ACTION = "Action",
    DRAMA = "Drama",
    COMEDY = "Comedy",
    ROMANCE = "Romance",
    TERROR = "Terror"
}

enum CRITRIC {
    PERFECT = 10,
    GREAT = 8,
    OK = 5,
    BAD = 3,
    TRASH = 0
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const hp: movie = {
    name: "Harry Potter",
    releaseDate: 2001,
    genre: GENRE.FANTASY,
    critic: CRITRIC.GREAT
}

const arcane: movie = {
    name: "Arcane",
    releaseDate: 2021,
    genre: GENRE.ACTION,
    critic: CRITRIC.PERFECT
}

const ultimohomem: movie = {
    name: "Até o último homem",
    releaseDate: 2019,
    genre: GENRE.DRAMA,
    critic: CRITRIC.PERFECT
}

const maepeca: movie = {
    name: "Minha mãe é uma peça",
    releaseDate: 2013,
    genre: GENRE.COMEDY,
    critic: CRITRIC.GREAT
}

const john: movie = {
    name: "Querido John",
    releaseDate: 2010,
    genre: GENRE.ROMANCE,
    critic: CRITRIC.GREAT
}

const it: movie = {
    name: "It",
    releaseDate: 2017,
    genre: GENRE.TERROR,
    critic: CRITRIC.GREAT
}

const movieList = [hp, arcane, ultimohomem, maepeca, john, it]

function printMovies () {
    console.table(movieList)
}

printMovies()