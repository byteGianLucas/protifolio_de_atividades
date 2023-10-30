// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let totalSomados = 0
let numerosPositivos = 0
let numerosNegativos = 0

for (let i = 1 ; i <= 10; i++) {
    let lerNumero = Number(prompt("Digite um número:"))
    totalSomados += lerNumero

    if (lerNumero >= 0) {
        numerosPositivos++
    } else {
        numerosNegativos++
    }
}

let mediaNumeros = totalSomados / 10 
let porcentagemPositivos = (numerosPositivos / 10) * 100
let porcentagemNegativos = (numerosNegativos / 10) * 100

document.write(`Média aritmética: ${mediaNumeros} <br>`)
document.write(`Total de números positivos: ${numerosPositivos} <br>`)
document.write(`Total de números negativos: ${numerosNegativos} <br>`)
document.write(`Percentual de números positivos: ${porcentagemPositivos}% <br>`)
document.write(`Percentual de números negativos: ${porcentagemNegativos}%`)


