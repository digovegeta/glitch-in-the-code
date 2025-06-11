const movies = require("../data/movies");

const getAllTitles = (movies) => { 
  const out = movies.map((ele) => {
    return ele.titulo
  }) 
  return out
}

module.exports = {
  getAllTitles
}