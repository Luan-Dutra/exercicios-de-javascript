const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    const clubes = ["Brasil","Pelotas","Farroupilha"]

    let selecao

    for(let i = 0; i <inRadios.length ; i++ ) {
        if(inRadios[i].checked){
            selecao = i
            break
        }
    }

    if (selecao <= 2) {
        dvTitulo.className =`row cores-${clubes[selecao]}`

        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid"
        imClube.alt = `Simbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao])
    } else{
        dvTitulo.className = ` row `
        imClube.className = "d-none"
        imClube.alt = ""
        localStorage.removeItem("clube")
    }


}


// associa ao evento change de cada botão do form a função trocarClube   
const inRadios = document.querySelectorAll("input")

for (const inRadio of inRadios) {
    inRadio.addEventListener("change",trocarClube)
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) {           // se já estiver salvo algum clube 
      const clube = localStorage.getItem("clube")  // obtém o nome do clube
  
      // conforme o clube, marca um dos elementos do input type radio
      if (clube == "Brasil") {
        inRadios[0].checked = true
      } else if (clube == "Pelotas") {
        inRadios[1].checked = true
      } else {
        inRadios[2].checked = true
      }
      trocarClube() // chama a function que troca a imagem e cores
    }
  }
  // ao carregar a página, verifica se cliente já selecionou clube anteriormente
  window.addEventListener("load", verificarClube)
  