const movies = require("../data/movies");

const highestRatedMovie = (movies) => {
  if(movies.length === 0){
    return undefined;
  }
  const out = movies.reduce((maior, atual) => {
    return atual.avaliacao > maior.avaliacao ? atual : maior;
  })  
  return out
}

console.log(highestRatedMovie([]));

module.exports = {
  highestRatedMovie
}