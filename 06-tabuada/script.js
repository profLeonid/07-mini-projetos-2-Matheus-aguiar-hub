'use strict'

//Fazendo o calculo da adição do numero e o indíce
function calcularAdicao(i, numero) {
return i + numero

}

//Fazendo a função de subtração do número e o indíce
function calcularSubtracao(i, numero) {
return i - numero

}

//Fazendo a função de multiplicação do número e o indíce
function calcularMultiplicacao(i, numero) {
return i * numero

}

//Fazendo a função de divisão do número e o indíce
function calcularDivisao(i, numero) {
return i / numero

}

//Criando a tabela da tabuada utilizando a adição, subtração, multiplicação e divisão
function criarTabela() {
                            //Pegando o id e definindo uma variável
    const input = document.getElementById('lblNumero')
    const tabela = document.getElementById('tbl')
    const numero = parseInt(input.value)

    while (tabela.firstChild) {
        tabela.removeChild(tabela.firstChild)
    }

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr')

        const dadosLinha = [
            i,
    calcularAdicao(i,numero),
    calcularSubtracao(i,numero),
    calcularMultiplicacao(i,numero),
    calcularDivisao(i,numero).toFixed(2)
        ]

        dadosLinha.forEach(texto => {
            const td = document.createElement('td')
            td.textContent = texto
            tr.appendChild(td)
        })

        tabela.appendChild(tr)
    }

}

document.getElementById('btnGerar').addEventListener('click', criarTabela)