// for (i = 0;i < 10; i++){
//    console.log(`<p>${i}<p>`)
// };

function papulateUFs() {
    const ufselect = document.querySelector("select[name=uf]") //criando uma constante e selecionando o objeto com name uf
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //fazendo uma chamada e retornando vazio
    .then( res => res.json() ) //trazer uma resposta da chamada com arrow function (then -> pensando que sempre vai dar certo)
    .then( states => {
        

        for(const state of states ) {
            ufselect.innerHTML  += `<option value="${state.id}">${state.nome}</option>`
        }


    } ) //pega os dados da chamada e retorna as ufs
}

papulateUFs() //chamando a função

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexofSelectedState = event.target.selectedIndex 
    stateInput.value = event.target.options[indexofSelectedState].text


    const ufvalue = event.target.value


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disablaed = true
    fetch(url) //fazendo uma chamada e retornando vazio
    .then( res => res.json() ) //trazer uma resposta da chamada com arrow function (then -> pensando que sempre vai dar certo)
    .then( cities => {
        

        for(const city of cities ) {
            citySelect.innerHTML  += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false 


    } ) //pega os dados da chamada e retorna as ufs
}

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)//adicionando um evento de mudança no campo uf

// itens de colota
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)

}

let selectedItems = []

function handleSelectedItem(event) {
    // console.log(event.target)
    // console.log(event.target.dataset.id)
    // console.log(itemId);
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    // se ja estiver selecionados, tirar da seleção

    // se não estiver selecionado, adicionar a seleção

    // atualizar o campo escondido com os itens selecionados
   
}