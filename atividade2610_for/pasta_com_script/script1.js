// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas.Este
// programa deverá calcular e mostrar:
// a.A menor altura do grupo;
// b.A maior altura do grupo;

let alturaMaior = -Infinity
let alturaMenor = Infinity

for (let i = 0; i <= 14; i++) {

    const altura = prompt('Digite a altura:')

    if (altura > alturaMaior) {

        alturaMaior = altura

    }

    if (altura < alturaMenor) {
        alturaMenor = altura

    }
}

document.write(`A maior altura é ${alturaMaior} <br>`)
document.write(`A menor altura é ${alturaMenor} <br>`)

// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:

// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let heightPedro = 150
let heightLucas = 110
let year = 0 

while (heightPedro >= heightLucas) {
    heightPedro += 2
    heightLucas += 3
    year += 1
} 

document.write(`Lucas e Pedro alcançaram o mesmo tamanho em ${year - 1} anos. <br>`)
document.write(`Lucas será maior que Pedro em ${year} anos. <br>`)

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

const numeroDaTabuada = Number(prompt("Digite um número:"))
const interacoes = Number(prompt("Digite a quantidade de interações:"))

for (let i = 0; i <= interacoes; i++) {
    console.log(`${i} x ${numeroDaTabuada} = ${i * numeroDaTabuada}`);
}

// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let multiplo3 = ""
let multiplo5 = ""

for (let i = 0; i < 250; i++) {
    if (i % 3 ==0){
        multiplo3 += i + ", "
    }

    if (i % 5 == 0) {
        multiplo5 += i + ", "
    }
}
 
document.write(`Divisível por 3: <br> ${multiplo3} <br><br><br><br>`)
document.write(`Divisível por 5: <br> ${multiplo5} <br>`)

// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

const numero = prompt("Digite um número:")
let mensagem = "Contagem:"

for (let i = 0; i <= numero; i++) {
    mensagem +=  i + ", "
}

document.write(`${mensagem} FIM.`)

// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let contagem = ""

for (let i = 30; i >= 1; i--) {

    let primo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        contagem += `[${i}] ,`
    } else {
        contagem += i + ","
    }
}

document.write(contagem)

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