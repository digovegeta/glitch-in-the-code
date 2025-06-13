const movies = require("../data/movies");

function listOverdueLoans(movies) {
 const out = movies.filter(ele => ele.emprestimos.length != 0)
                   .map(ele => {
                     //console.log(new Date(ele.emprestimos[0].dataDevolucao) < new Date())
                     if(new Date(ele.emprestimos[0].dataDevolucao) < new Date()){
                        const atrasado = {
                          dataDevolucao: "", 
                          dataEmprestimo: "", 
                          id: "",
                          status: "",
                          titulo: "", 
                        }
                        atrasado.id = ele.id
                        atrasado.titulo = ele.titulo
                        atrasado.dataEmprestimo = ele.emprestimos[0].dataEmprestimo
                        atrasado.dataDevolucao = ele.emprestimos[0].dataDevolucao
                        atrasado.status = "atrasado"
                        return atrasado
                    }else{
                      return []
                    }
                  })
 return out
}
console.log(listOverdueLoans(movies))
module.exports = {
  listOverdueLoans
}