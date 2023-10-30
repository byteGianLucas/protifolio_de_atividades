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