const movies = require("../data/movies");

const availableMovies = (movies) => {
 const out = movies.filter((ele) => {
      return ele.disponivel
    })
    .map( (ele) => {    
      return ele.titulo
    })
  return out
}

console.log(availableMovies(movies))
module.exports = {
  availableMovies
}