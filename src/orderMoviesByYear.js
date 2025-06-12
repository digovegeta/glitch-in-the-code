const movies = require("../data/movies");

const orderMoviesByYear = (movies) => {
const out = movies.map(ele => ele).sort((a,b) => a.anoLancamento - b.anoLancamento)
return out
}

console.log(orderMoviesByYear(movies));

module.exports = {
  orderMoviesByYear
}