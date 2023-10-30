// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidade = parseFloat(prompt('Digite a velocidade do carro.'))
const velmax = 80 
let dif = (velocidade - velmax)
let multa = 0 

if (dif > 0 ) {
    multa = dif * 5 
    alert(`Você passou a ${dif}Km/h a mais e foi multado em R$${multa}`)
} else {
    alert(`Parabéns! Você passou dentro do limite de velocidade e não foi multado.`)
}
