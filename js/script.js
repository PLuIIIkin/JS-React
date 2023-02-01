let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних посмотренных фильмов?', '');
//     let b = prompt('На сколько оцените его?', '');

//     if (
//         a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50
//     ) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }
let i = 0;
while (i < 2) {
    let a = prompt('Один из последних посмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');

    if (
        a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50
    ) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
}

if (personalMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель')
} else if (personalMovieDB.count >= 30){
    alert('Вы киноман!')
} else {
    console.log('Произошла ошибка')
}
