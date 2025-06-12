const movies = require("../data/movies");

function getMoviesByActor(ator) {
  const out = movies.filter((ele) => {
    const filme = ele.elenco.find(ele => {
      return ele == ator 
    })
    return filme
  })
  return out;
}

console.log(getMoviesByActor("Robert Downey Jr."));

module.exports = {
  getMoviesByActor
}