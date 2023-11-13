// // 1. Crie uma variável JavaScript e coloque nela o valor de sua idade.
// // Mostre no html usando o document.write() o dado contido na
// // variável junto da frase "Minha idade é x anos", sendo "x" o valor
// // armazenado na sua variável.

// const myage = 16
// document.write(` <h3/> Minha idade é ${myage} anos <h3/>`)

// // 2. Crie três variáveis JavaScript, em duas delas atribua os valores que
// // você quiser e na ou*tra atribua o valor da soma das duas primeiras
// // variáveis. Apresente valor da soma no documento html junto da
// // frase "A resultado da soma de x e y é z", sendo x o valor armazenado
// // na primeira variável, y o valor armazenado segunda variável e z o
// // valor armazenado na terceira variável

// const number1 = 1
// const number2 = 2
// const number3 = (number1 + number2)
// document.write(`<h3/> O resultado da soma de ${number1} e ${number2} é ${number3} <h3/>`)

// // 3. Crie três variáveis, na primeira variável coloque o total de uma
// // compra, por exemplo 149.90. Na segunda variável coloque a
// // quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// // o valor da parcela. Apresente no documento html as seguintes
// // informações:
// // "O valor total da compra foi R$_,_"
// // "Forma de pagamento: _x de R$_,_"

// const num1 = 149.90
// const num2 = 2
// const num3 = (num1 / num2)
// document.write(` <h3/> Valor total da compra foi R$${num1.toFixed(2).replace(`.` , `,`)} <h3/>`)
// document.write(`Forma de pagamento: ${num2}x de R$ ${num3.toFixed(2).replace(`.` , `,`)}`) 

// // 4. Crie duas variáveis. Na primeira coloque um total de minutos e
// // defina um valor para ela (por exemplo, minutos = 120). Na segunda
// // coloque o total em segundos destes minutos armazenados na
// // primeira variável. Apresente no documento html a seguinte
// // informação: "_ minutos equivale à _ segundos!"

// const minutos = 240
// const second = minutos * 60
// document.write(`<h3/>${minutos} minutos equivale à ${second} segundos.<h3/>`)

// // 5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// // segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// // Calcule a média das notas e armazene na quinta variável criada.
// // Apresente no documento html a seguinte informação:
// // "O aluno _____ ficou com média _,_"

// const nome = "João"
// const nota1 = 9.5
// const nota2 = 8.7
// const nota3 = 7.3

// const media = (nota1 + nota2 + nota3) / 3
// document.write(`O aluno ${nome} ficou com média ${media.toFixed(1)}`)

// // 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
// // A e o valor 20 em uma variável B. A seguir (utilizando apenas
// // atribuições entre variáveis) troque os seus conteúdos fazendo com
// // que o valor que está em A passe para B e vice-versa. Ao final,
// // escrever os valores que ficaram armazenados nas variáveis.

// let A = 10
// let B = 20

// let C = A
// A = B
// B = C

// document.write(`<h3/>Valor em A:<h3/>`, A)
// document.write(`<h3/>Valor em B:<h3/>`, B)

// // 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// // município, o número de votos brancos, nulos e válidos. Calcular e
// // escrever o percentual que cada um representa em relação ao total
// // de eleitores.

// const votosBrancos = 150
// const votosNulos = 100
// const votosTotal = 1000

// const percentualBrancos = (votosBrancos / votosTotal) * 100
// const percentualNulos = (votosNulos / votosTotal) * 100
// const percentualValidos = ((votosTotal - votosBrancos - votosNulos) / votosTotal) * 100

// document.write(` <h3/> Percentual de votos brancos: ${percentualBrancos.toFixed(0)}% <h3/> Percentual de votos nulos: ${percentualNulos.toFixed(0)}% <h3/>
// Percentual de votos válidos: ${percentualValidos.toFixed(0)}%`)

// // 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// // três mensagens a seguir:
// // a. ‘Números iguais’, caso os números sejam iguais;
// // b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// // c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

// const valor1 = 50
// const valor2 = 150

// if(valor1 == valor2) {
//     document.write(`<h3/> Números iguais! <h3/>`)
// } else if (valor1 > valor2) {
//     document.write(`<h3/> O primeiro número é maior! <h3/>`)
// } else {
//     document.write(`<h3/> O segundo número é maior! <h3/>`)
// }

// // 9. As maçãs desta estação custam R$0,30 se forem compradas
// // menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// // doze. Desenvolva um algoritmo que leia o número de maçãs
// // compradas, calcule e escreva o valor total da compra.

// let precoMaca;
// const macasCompradas = 5

// if (macasCompradas < 12) {
//     precoMaca = 0.30
// } else {
//     precoMaca = 0.25
// }
// let valorTotal = macasCompradas * precoMaca

// document.write(`<h3>O valor total da compra é R$${valorTotal.toFixed(2)}</h3>`)

// // 10. Escreva um algoritmo que tenha como valores de entradas o nome
// // e idade do usuário e imprima no terminal o nome, a idade e o ano
// // de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// // em 2000”.
// // OBS: Pegue o ano atual como base

// const peoplename = "Gian" 
// const wasborn = 2007 
// const age =  (2023 - wasborn)

// console.log(`<h3> Nome: ${peoplename}, Idade: ${age} anos, nasceu em ${wasborn}</h3>`)

// // 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// // um alerta com as seguintes mensagens:
// // a. “Número é par!”, se o valor armazenado for par;
// // b. “Número é impar!”, se o valor armazenado for ímpar;

// const numb = 11

// if (numb / 2 == 0) {
//     alert("Número é par!")
// } else {
//     alert("Número é impar!")
// }

// // 12. Escreva um algoritmo que armazene o ano atual e o ano de
// // nascimento de uma pessoa. Escrever uma mensagem no console
// // que diga se ela poderá ou não votar este ano (não é necessário
// // considerar o mês em que a pessoa nasceu).

// const year = 2023
// const bornyear = 2007

// if (year > 2007){
//     console.log('Você pode votar!')
// } else 
//     console.log('Você não pode votar!')