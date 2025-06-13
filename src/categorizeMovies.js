const movies = require("../data/movies");

function categorizeMovies(movies, details = true) {
  if(movies.length == 0){
      return {}
  }
  if(movies[0].genero.length == 0){
    return {}
  }
 const out = movies.map(ele => ele.genero)//.sort((a,b) => a-b)
 return out
}
console.log(categorizeMovies(movies));
module.exports = {
  categorizeMovies
}
