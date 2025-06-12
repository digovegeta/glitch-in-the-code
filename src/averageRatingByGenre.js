const movies = require("../data/movies");
function averageRatingByGenre(genero) {
  if(genero === undefined || genero === ''){
    return "O parâmetro é obrigatório."
  }else{
    if(typeof genero !== typeof "")
    return "O parâmetro tem que ser uma string."
  }
let out = movies.map( ele => ele.genero.filter( ele => ele == genero ) == genero ? ele : 0 )
out = out.filter(ele => ele != 0)       
out = out.map(ele => ele.avaliacao)
   if(out == 0){
    return "Não há filmes do gênero " + genero +"."
   }else{
    soma = out.reduce((acumulador, valor) => acumulador + valor, 0)
    return "A média de avaliação dos filmes do gênero "+genero+" é " + (soma / out.length).toFixed(2)+".";
      
   }
  return out
}

console.log(averageRatingByGenre('Filme Clássico'))
console.log(averageRatingByGenre('Ação'))
console.log(averageRatingByGenre("Comédia"))
/*console.log(averageRatingByGenre())
console.log(averageRatingByGenre(123))
console.log(averageRatingByGenre(''))*/
module.exports = { 
  averageRatingByGenre
}