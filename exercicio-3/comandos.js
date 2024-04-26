const fm = document.querySelector("form")
const qtdServico = document.querySelector("#qtdServico")
const descricao = document.querySelector("#descricao")
const executar = document.querySelector("#executar")

const servicos = []

fm.addEventListener("submit", (e) =>{
    e.preventDefault() // evitar o carregamento da pagina

    const servico = fm.servico.value;               // pega a referencia ao valor de input do form
    servicos.push(servico)                                                    // joga no array

    fm.servico.value = "";

    for (const servico of servicos){
        setServico(servico)
        console.log(servico)
    }

    // debug
    console.log(servico);
    console.log(e);
} );

function setServico(servico){
     localStorage.setItem('servicos', servico)
   
}



executar.addEventListener("click", (e) => {
    e.preventDefault()

})


