const movies = require("../data/movies");

const actorsInMovie = (titulo) => {
  let out = movies.filter( ele => ele.titulo == titulo)
  .map((ele) => {
     
    return ele.elenco[0] + ele.elenco[1]
  })
    out = out.length == 0 ? "Filme não encontrado." : out;
  return out
}

console.log(actorsInMovie("Matrix"))
module.exports = {
  actorsInMovie
}