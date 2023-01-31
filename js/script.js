

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let filmOne = prompt('Один из последних посмотренных фильмов?', '');
let ocenkaOne = prompt('На сколько оцените его?', '');
let filmTwo = prompt('Один из последних посмотренных фильмов?', '');
let ocenkaTwo = prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmOne] = ocenkaOne;
personalMovieDB.movies[filmTwo] = ocenkaTwo;

console.log(personalMovieDB)