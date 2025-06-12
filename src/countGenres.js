const movies = require("../data/movies");

function countGenres(movies) { 

  const contagem = {};
  const todosGeneros = movies.flatMap(ele => ele.genero)
                             .sort((a,b) => a-b)
                             .forEach(genero => {
                                contagem[genero] = (contagem[genero] || 0) + 1;
                              }); 
  return contagem
}

console.log(countGenres(movies))
module.exports = {
  countGenres
}