function calcularParcelaFixa (valorTotal, numeroParcelas) {
    return valorTotal / numeroParcelas
}

function calcularDadosParcela (mes, saldoDevedor, parcela, taxaJuros) {
    const jurosMes = saldoDevedor * (taxaJuros / 100)
    const totalMes = parcela + jurosMes
    const saldoFinal = saldoDevedor - parcela

    return {
        mes,
        parcela,
        jurosMes,
        totalMes,
        saldoFinal
    }
}

function validarInputs (valorTotal, taxaJuros, numeroParcelas) {
    if (valorTotal <= 0 || isNaN(valorTotal)) {
        alert('Valor total deve ser maior que 0')
        return false
    }
    if (taxaJuros < 0 || isNaN(taxaJuros)) {
        alert('Taxa de juros não pode ser negativa')
        return false
    }
    if (numeroParcelas <= 0 || isNaN(numeroParcelas)) {
        alert('Número de parcelas deve ser maior que 0')
        return false
    }
    return true
}

function formatarMoeda (valor) {
    return `R$ ${valor.toFixed(2)}`
}

function gerarTabelaFinanciamento () {
    const inputValorTotal = document.getElementById('valorTotal')
    const inputTaxaJuros = document.getElementById('taxaJuros')
    const inputNumeroParcelas = document.getElementById('numeroParcelas')

    const valorTotal = parseFloat(inputValorTotal.value)
    const taxaJuros = parseFloat(inputTaxaJuros.value)
    const numeroParcelas = parseInt(inputNumeroParcelas.value, 10)

    if (!validarInputs(valorTotal, taxaJuros, numeroParcelas)) {
        return
    }

    const parcela = calcularParcelaFixa(valorTotal, numeroParcelas)
    let saldoDevedor = valorTotal
    const tbody = document.getElementById('tbl')
    tbody.innerHTML = ''

    for (let mes = 1; mes <= numeroParcelas; mes++) {
        const dados = calcularDadosParcela(mes, saldoDevedor, parcela, taxaJuros)
        saldoDevedor = dados.saldoFinal

        const tr = document.createElement('tr')
        const dadosLinha = [
            dados.mes,
            formatarMoeda(dados.parcela),
            formatarMoeda(dados.jurosMes),
            formatarMoeda(dados.totalMes),
            formatarMoeda(Math.max(dados.saldoFinal, 0))
        ]

        dadosLinha.forEach(texto => {
            const td = document.createElement('td')
            td.textContent = texto
            tr.appendChild(td)
        })

        tbody.appendChild(tr)
    }
}

document.getElementById('btnGerar').addEventListener('click', gerarTabelaFinanciamento)
 