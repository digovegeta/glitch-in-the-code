const movies = require("../data/movies");

function getMovieById(id) {
    const out = movies.find((ele) => {
      return id === ele.id ? ele: 0;
    })
    return out
}
console.log(getMovieById('1'));

module.exports = {
  getMovieById
}