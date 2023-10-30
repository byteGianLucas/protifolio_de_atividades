// // 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// // três mensagens a seguir:
// // a. ‘Números iguais’, caso os números sejam iguais;
// // b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// // c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

const valor1 = 50
const valor2 = 150

if(valor1 == valor2) {
    document.write(`<h3/> Números iguais! <h3/>`)
} else if (valor1 > valor2) {
    document.write(`<h3/> O primeiro número é maior! <h3/>`)
} else {
    document.write(`<h3/> O segundo número é maior! <h3/>`)
}