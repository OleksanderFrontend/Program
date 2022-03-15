"use script"

const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 1; i <= 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '')
  b = prompt('На сколько оцените его?', '');
 
  if(a != '' && b != '' && a != null && b != null && a.length < 50)  {
     personalMovieDB.movies[a] = b;
     console.log('Done');
  } else {
    console.log('error');
    i--;
  }
  
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Киноман');
} else {
  console.log('Произошла ошибка');
}


console.log(personalMovieDB);