"use script"

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
}

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(numberOfFilms.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const answers = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = answers;
  }
}

writeYourGenres();

// console.log(personalMovieDB);