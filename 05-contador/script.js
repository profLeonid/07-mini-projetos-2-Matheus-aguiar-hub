'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPares (quantidade){
    let listaPares = []
    
    for(let i = 1; i <= quantidade; i++){
        listaPares.push(i * 2)

    }

    return listaPares
}

function criarListaImpares (quantidade){
    let listaImpares = []

    for(let i = 1; i <= quantidade; i++){
        listaImpares.push(i * 2 - 1)
    }

    return listaImpares
}

function criarListaMultiplos (quantidade) {
    let listaMultiplos = []

    for(let i = 1; i <= quantidade; i++){
        listaMultiplos.push(i * 5)
    }

    return listaMultiplos
}

function criarListaPotencias () {
    let listaPotencia = []

    for(let i = 1; i <= quantidade; i++){
        listaPotencia.push(2 ** (i - 1))
    }

    return listaPotencia
}

function criarTabela () {
    const input     = document.getElementById ('quantidade')
    const tabela    = document.getElementById ('tabela')
    const quant     = parseInt(input.value) 

    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild)
    }

    const colunaContagem    = criarListaNumeros(quant)
    const colunaPares       = criarListaPares(quant)
    const colunaImpares     = criarListaImpares(quant)
    const colunaMult5       = criarListaMultiplos(quant)
    const colunaPotencia    = criarListaPotencias(quant)   

    for (let i = 0; i < quant; i++){
        const tr = document.createElement('tr')

        const dadosLinha = [
            colunaContagem[i],
            colunaPares[i],
            colunaImpares[i],
            colunaMult5[i],
            colunaPotencia[i]
        ]

        dadosLinha.forEach(texto => {
            const td = document.createElement('td')
            td.textContent = texto
            tr.appendChild(td)
        })

        tabela.appendChild(tr)
    }

}

document.getElementById('gerar').addEventListener('click', criarTabela)