// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let totalSomado = 0
let numerosPositivos = 0
let numerosNegativos = 0

for (let i = 0 ; i <= 10; i++) {
    let lerNumero = Number(prompt("Digite um número:"))
    totalSomado += lerNumero

    if (lerNumero >= 0) {
        numerosPositivos++
    } else {
        numerosNegativos++
    }
}

let mediaNumeros = totalSomados /10 
let porcentagemPositivos = (numerosPositivos / 10) * 100
let porcentagemNegativos = (numerosNegativos / 10) * 100

console.log(`Média aritimetica: ${mediaNumeros}`)
console.log(`Total de números positivos: ${numerosPositivos}`)
console.log(`Total de números negativos: ${numerosNegativos}`)
console.log(`Media de números positivos: ${porcentagemPositivos}`)
console.log(`Media de números negativos: ${porcentagemNegativos}`)

