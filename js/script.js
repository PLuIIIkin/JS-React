let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Один из последних посмотренных фильмов?', '').trim();
      let b = prompt('На сколько оцените его?', '').trim();

      if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detecctPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман!');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      return console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let a = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (a != null && a != '' && a.length < 50 && typeof a != 'number') {
        personalMovieDB.genres[i - 1] = a;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i+1} - это ${item}`)
    })
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// start();

// rememberMyFilms();

// detecctPersonalLevel();

// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.writeYourGenres();

// console.log(personalMovieDB);

// console.log(detecctPersonalLevel());
