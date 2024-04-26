const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    console.log(modelo , preco , carros,frm)
    carros.push({modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    inModelo.focus()
    // dispara um evento de click em btLista
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (carros.length ==0){
        alert("não há carroos na lista")
        return
    }
    // metodo reduce( concatena uma string, obtendo modelo e preco de cada veiculo
  const lista = carros.reduce((acumulador, carro) =>
  acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) +"\n" , "")
  resp.innerText = `Lista dos carros cadastrado /n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("qual o valor maximo que o cliente quer pagar?"))
    if (maximo == 0  ||isNaN(maximo)) {
        // se não informo valor  ou valor invalido
       return     // ...retorna
    }
    // cria um novo vetor com oos objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {
        alert("não há carroos com preço inferiooe ou igual ao solicitado")
        return
    }
    let lista = ""
    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carroos até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})
/ 
frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o porcentual do desconto: "))
    if (desconto == 0 || isNaN(desconto) ){
        return
    }
    const carroDesco = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco - (aux.preco * desconto / 100)}))
    let lista =""
    for (const carro of carroDesco) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})