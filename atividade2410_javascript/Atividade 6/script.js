// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let num1 = Number(prompt('Digite o primeiro número'))
let num2 = Number(prompt('Digite o segundo número'))
let operacao = prompt('Digite a operação.')
let resultado = ''

if (operacao === '+') {
    resultado = (num1 + num2)

} else if (operacao === '-' ) {
    resultado = (num1 - num2)

}  else if (operacao === '/' ) {
    resultado = (num1 / num2)

} else if (operacao === '*' ) {
    resultado = (num1 * num2)
} else {
    resultado = 'Operação inválida.'
}
alert(`O resultado da operação é: ${resultado}`)
window.location.reload()