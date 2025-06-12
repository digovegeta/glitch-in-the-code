const movies = require("../data/movies");

const nolanMoviesByRating = (movies) => {
 const out = movies.filter((ele) => 'Christopher Nolan' == ele.diretor)
 .sort((a,b) => b.avaliacao - a.avaliacao)
 return out
}
console.log(nolanMoviesByRating(movies))
module.exports = {
  nolanMoviesByRating
}