// // 9. As maçãs desta estação custam R$0,30 se forem compradas
// // menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// // doze. Desenvolva um algoritmo que leia o número de maçãs
// // compradas, calcule e escreva o valor total da compra.

let precoMaca;
const macasCompradas = 5

if (macasCompradas < 12) {
    precoMaca = 0.30
} else {
    precoMaca = 0.25
}
let valorTotal = macasCompradas * precoMaca

document.write(`<h3>O valor total da compra é R$${valorTotal.toFixed(2)}</h3>`)