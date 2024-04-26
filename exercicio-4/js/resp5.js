const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valorClube = frm.inClube.value
    clubes.push(valorClube)
    
    if(clubes.length == 0 ) {
        alert("adicione um clube")
        return
    }
    inClube.value = ""
    inClube.focus()
     frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    let lista = ""
    for(const clube of clubes) {
        lista += `Clube: -${clube}--\n`   
    }
    resp.innerText = lista
})
frm.btMontar.addEventListener("click", () => {
    if (clubes.length % 2 != 0) {
        alert("falta um clube para poder fechar uma tebela")
        return
    }
    let tabela = ""
    for(let i = 0 ; i <=clubes.length / 2 ; i += 2) {
        
        tabela +=` partida: -${clubes[i]} vs ${clubes[i+1]}--\n `
         
    }
    resp.innerText = tabela
})
 