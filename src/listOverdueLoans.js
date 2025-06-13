const movies = require("../data/movies");

function listOverdueLoans(movies) {
 const out = movies.map(ele => ele )
                   .map(ele => {
                     const atrasado = ele.emprestimos[0]
                     if(ele.emprestimos.length != 0){
                      if(new Date(ele.emprestimos[0].dataDevolucao) < new Date()){
                          atrasado.id = ele.id
                          atrasado.status = "atrasado"
                          atrasado.titulo = ele.titulo
                          return atrasado
                      }else{
                        return atrasado
                      }
                    }else{
                      return atrasado
                    }
                  })
 return out
}
console.log(listOverdueLoans(movies))
module.exports = {
  listOverdueLoans
}