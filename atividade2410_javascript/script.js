// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

// const celsius = prompt('Digite os graus celsius')
// const fahrenheit = (celsius * 9) / 5 + 32
// document.write(` ${celsius} equeivalem a ${fahrenheit} <br> `)

// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

// let numero = prompt('Digite o número da semana.')

// if (numero) {
//     switch (numero) {
//         case '1':
//             numero = 'Segunda-feira';
//             break;

//         case '2':
//             numero = 'Terça-feira';
//             break;

//         case '3':
//             numero = 'Quarta-feira';
//             break;

//         case '4':
//             numero = 'Quinta-feira';
//             break;

//         case '5':
//             numero = 'Sexta-feira';
//             break;

//         case '6':
//             numero = 'Sábado';
//             break;

//         case '7':
//             numero = 'Domingo';
//             break;
//         }

//         document.write(`O nome do dia é: ${numero} <br> `)
        
// }

// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

// const numb = prompt('Digite o número')
// let status = ''

// if (numb > 0 ) {
//     status = 'positivo'
// } else if (numb < 0) {
//     status = 'negativo'
// } else {
//     status = 'zero'
// }
// document.write(numb + ' é ' + status `<br>`)

// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

// const custofabrica = Number(prompt('Custo de fábrica'))
// const distribuidor = (28 * custofabrica) / 100 
// const impostos = (45 * custofabrica) / 100 

// let total = (custofabrica + distribuidor + impostos) 
// document.write(`O preço do carro é de R$ ${total.toFixed(1).replace('.' , ',')}`)

// Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:

// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;

// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;

// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.


// const altura = parseFloat(prompt('Digite sua altura.'))
// const peso= parseFloat(prompt('Digite seu peso.'))
// let imc = peso / (altura * altura)
// let status = ''

// if (imc < 18.5) {
//     status = 'Você está abaixo da faixa de peso ideal.'
// } else if (imc > 24.99) {
//     status = 'Você está acima da faixa de peso ideal.'
// } else {
//     status = 'Você está dentro da faixa de peso ideal.'
// }
// document.write(status `<br>`)

// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

// let num1 = Number(prompt('Digite o primeiro número'))
// let num2 = Number(prompt('Digite o segundo número'))
// let operacao = prompt('Digite a operação.')
// let resultado = ''

// if (operacao === '+') {
//     resultado = (num1 + num2)

// } else if (operacao === '-' ) {
//     resultado = (num1 - num2)

// }  else if (operacao === '/' ) {
//     resultado = (num1 / num2)

// } else if (operacao === '*' ) {
//     resultado = (num1 * num2)
// } else {
//     resultado = 'Operação inválida.'
// }
// alert(`O resultado da operação é: ${resultado}`)
// window.location.reload()

// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.

// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.



// let saldo = parseFloat(prompt('Digite o saldo.'))
// let retirada = parseFloat(prompt('Digite o valor do saque.'))

// if (retirada < saldo && retirada % 5 === 0) {
//     saldo = saldo - (retirada + 4.50)
//     status = 'Saque realizado com sucesso.'

// } else if (retirada < saldo && retirada % 5 != 0) {
//     status = 'Só temos troco de 5 em 5.'
// }
//  else (
//     status = 'Operação inválida, sem saldo suficiente.'
// ) 
// alert(`${status} Seu saldo é de R$ ${saldo.toFixed(2).replace('.' , ',')}`)

// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio

// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

// let idade = prompt('Digite sua idade.')
// let peso = prompt('Digite seu peso.')

// if (idade <= 12) {
//     status = 'Infantil'
    
// } else if (idade >= 13 && idade <= 16)  { 
//     if (peso <= 40) {
//         status = 'Juvenil leve'
//     } else {
//         status = 'Juvenil pesado'
//     }

// } else if (idade >= 17 && idade <= 24) { 
//     if (peso <= 45) {
//         status = 'Sênior leve'
//     } else if (peso > 45 && peso < 60) {
//         status = 'Sênior médio'
//     } else if (peso > 60) 
//         status = 'Sênior pesado'
// } else {
//     status='Veterano'
// }
// document.write(status)

// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

// let velocidade = parseFloat(prompt('Digite a velocidade do carro.'))
// const velmax = 80 
// let dif = (velocidade - velmax)
// let multa = 0 

// if (dif > 0 ) {
//     multa = dif * 5 
//     alert(`Você passou a ${dif}Km/h a mais e foi multado em R$${multa}`)
// } else {
//     alert(`Parabéns! Você passou dentro do limite de velocidade e não foi multado.`)
// }

