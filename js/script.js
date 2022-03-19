"use script"


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  countMovies: function () {
    personalMovieDB.count = +prompt('Cколько фильмов вы уже посмотрели?');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Cколько фильмов вы уже посмотрели?');
    }
  },

  rememberMyFilms: function () {
    for (let i = 1; i <= 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      b = prompt('На сколько оцените его?', '');

      if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
      } else {
        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {

    for (let i = 1; i < 2; i++) {
      // let answers = prompt(`Ваш любимый жанр под номером ${i}`);
      // if (answers != '' && answers != null) {
      //   personalMovieDB.genres[i - 1] = answers;
      // } else {
      //  console.log("Введите названия фильма");
      //   i--;
      // }

      // if(answers == '' || answers == null) {
      //   console.log("Ввы ввели некоректные данные или не ввели их вовсе");
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = answers;
      // }

      // while (answers == '' || answers == null) {
      //   answers = prompt(`Ваш любимый жанр под номером ${i}`);
      // }
      // personalMovieDB.genres[i - 1] = answers;

      let answers = prompt("Введите свои любимые жанры").toLowerCase();
      if (answers == '' || answers == null) {
        console.log("Ввы ввели некоректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres = answers.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach( (item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
  }
}

