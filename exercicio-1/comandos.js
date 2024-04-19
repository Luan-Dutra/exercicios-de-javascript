const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    let clube 
    if (frm.rbBrasil.checked) {
        clube = "Brasil" 
    }else if (frm.rbPelotas.checked){
        clube = "Pelotas"
    }else{
        clube = "Farropilha"
    }

    // define as classes de devtitulo:row e cores dos clubes
    
    dvTitulo.className = ` row cores-${clube}`
    
    //mopdifica as imagens de acordo com o clube

    imClube.src = `img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Simbolo do ${clube}`

    localStorage.setItem("clube", clube)

}
// associa ao evento change de cada botão do form a função trocarClube   
frm.rbBrasil.addEventListener("change", trocarClube)   
frm.rbPelotas.addEventListener("change", trocarClube)   
frm.rbFarroupilha.addEventListener("change", trocarClube) 

const verificarClube = () => {
    if (localStorage.getItem("clube")) {           // se já estiver salvo algum clube
      const clube = localStorage.getItem("clube")  // obtém o nome do clube
  
      if (clube == "Brasil") {                     // conforme o clube, marca checked 
        frm.rbBrasil.checked = true
      } else if (clube == "Pelotas") {
        frm.rbPelotas.checked = true
      } else {
        frm.rbFarroupilha.checked = true
      }
      trocarClube()                          // chama function que troca imagem e cores
    }
  }
  // ao carregar a página, verifica se cliente já selecionou clube anteriormente
  window.addEventListener("load", verificarClube)
  