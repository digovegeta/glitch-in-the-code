const { movies } = require("../data/list1");

const displayMovies = (movies) => {
  const out = movies.map((ele) => {
    return "Título: " + ele.titulo + " - Diretor: " + ele.diretor;
  })
 return out
}

/*console.log(displayMovies(movies));*/

console.log(movies)

module.exports = {
  displayMovies
}