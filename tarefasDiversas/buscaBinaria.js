function buscaBinaria(lista, item) {
    let inicio = 0
    let fim = lista.length - 1
    let qtdOperacoes = 0

    while (inicio <= fim) {
        qtdOperacoes++
        let meio = Math.floor((inicio + fim) / 2)

        if (lista[meio] == item) {
            console.log(`Número de operações necessárias: ${qtdOperacoes}`)
            return meio
        } else if (lista[meio] < item) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }

    return -1;
}

let listaNumeros = []
for (let i = 0; i <= 50; i++) {
    listaNumeros[i] = i 
}

const itemBuscado = 10

const resultado = buscaBinaria(listaNumeros, itemBuscado)

if (resultado !== -1) {
    //console.log(`Lista: ${listaNumeros}`)
    console.log(`Item encontrado no índice ${resultado}`)    
} else {
    console.log('Item não encontrado')
}