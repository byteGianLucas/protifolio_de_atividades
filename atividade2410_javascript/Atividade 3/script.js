// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

const numb = prompt('Digite o número')
let status = ''

if (numb > 0 ) {
    status = 'positivo'
} else if (numb < 0) {
    status = 'negativo'
} else {
    status = 'zero'
}

document.write(`${numb} é ${status}`)