let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
        numberOfFilms == '' ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних посмотренных фильмов?', '').trim();
        let b = prompt('На сколько оцените его?', '').trim();

        if (
            a != null &&
            b != null &&
            a != '' &&
            b != '' &&
            a.length < 50 &&
            b.length < 50
        ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detecctPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

// detecctPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        return console.log(personalMovieDB);
    }
}
// showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        
        if (a != null && a != '' && a.length < 50 && typeof(a) != 'number'){
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            }
    }
}

writeYourGenres();

console.log(personalMovieDB);

// console.log(detecctPersonalLevel());
