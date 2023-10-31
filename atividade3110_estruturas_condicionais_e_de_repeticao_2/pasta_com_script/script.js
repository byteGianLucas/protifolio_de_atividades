// // 1. Crie uma variável para ler a idade de um motorista. Caso o
//     // motorista tenha idade maior ou igual a 18 anos imprime no console
//     // “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

//     let idade = prompt("Digite sua idade")

//         if (idade >= 18) {
//             document.write("Você pode dirigir.")
//         } else {
//             document.write("Você não pode dirigir.")
//         }

// //     2. Para o mesmo exercício acima insira mais uma variável a
//     // condicional, além de saber se o motorista tem 18 anos ou mais,
//     // temos que saber também se ele é habilitado para dirigir. Caso ele
//     // tenha idade maior ou igual a 18 anos e possua habilitação, insira no
//     // html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

//     let idade = prompt("Digite sua idade")
//     let cnh = prompt ('Você é habilitado? Sim ou não?')

//         if (idade >= 18 && cnh ==="sim") {
//             document.write("Você pode dirigir.")

//         } else {
//             document.write("Você não pode dirigir.")
//         }

// // 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
//     // número de 1 a 7 e imprimir no console o dia da Semana. Para este
//     // exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
//     // por diante. Caso o número recebido não esteja neste intervalo
//     // imprimir “Dia não reconhecido”.

//     const number = prompt('Digite o número do dia, 1 é domingo, 2 é segunda e etc.')

//         if (number == 1) {
//             document.write('O dia é: domingo.')
//         } else if (number == 2) {
//             document.write('O dia é: segunda-feira.')
//         } else if (number == 3) {
//             document.write('O dia é: terça-feira.')
//         } else if (number == 4) {
//             document.write('O dia é: quarta-feira.')
//         } else if (number == 5) {
//             document.write('O dia é: quinta-feira.')
//         } else if (number == 6) {
//             document.write('O dia é: sexta-feira.')
//         } else if (number == 7) {
//             document.write('O dia é: sábado.')
//         } else {
//             alert('Dia não reconhecido.')
//         }

//   // 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

//   let number = parseInt(prompt('Digite o número do dia, 1 é domingo, 2 é segunda e etc.'))

//   switch (number) {
//       case 1:
//           document.write('O dia é: domingo.');
//           break;
//       case 2:
//           document.write('O dia é: segunda-feira.');
//           break;
//       case 3:
//           document.write('O dia é: terça-feira.');
//           break;
//       case 4:
//           document.write('O dia é: quarta-feira.');
//           break;
//       case 5:
//           document.write('O dia é: quinta-feira.');
//           break;
//       case 6:
//           document.write('O dia é: sexta-feira.');
//           break;
//       case 7:
//           document.write('O dia é: sábado.');
//           break;
//       default:
//           document.write('Dia não reconhecido.');
//   }

// //     5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
//     // os números pares.

//     for (let contador = 1; contador <= 10; contador++) {
//         if (contador % 2 === 0 ) {
//             document.write(`${contador} <br> <h4>`)
//         }
//     }
    
// // 6. Insira no html 30 ( trinta ) números ímpares.

// for (let contador = 1; contador <= 30; contador++) {
//     if (contador % 2 === 1 ) {
//         document.write(`${contador} <br> <h4>`)
//     }
// }

// //     7. Utilizando do...while, imprima na tela a soma de todos os números
//     // entre 10 e 100.

//     let contador = 10
//     let soma = 0

//     do {
//         soma += contador
//         contador++
//     } while (contador <= 100);
//     document.write(`A soma é de ${soma}`)

//  //     8. Crie uma variável para armazenar o salário do usuário e atribua um
//     // valor a essa variável. Crie a validação necessária:
//     // - Caso o salário seja MENOR que R$ 1.903,98, insira no html
//     // "ISENTO DE IR";
//     // - caso contrário insira "TRIBUTADO NO IR".

//     let salario = prompt('Digite seu salário:')

//     if (salario <= 1903.98) {
//         alert(`Tributado no IR`)
//     } else {
//         alert(`Isento de IR`)
//     }

// //     9. Informe um valor a uma variável e imprima no console se o número
//     // é primo.

//     let number = parseInt(prompt('Digite um número para verificar se é primo:'));
//     let primo = true;

//     if (number <= 1) {
//         primo = false;
//     } else if (number > 2) {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 primo = false;
//                 break;
//             }
//         }
//     }

//     if (primo) {
//         document.write(`${number} é primo.`);
//     } else {
//         document.write(`${number} não é primo.`);
//     }

//   //     10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     // forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     // pessoa, construa um programa que calcule e mostre seu peso ideal,
//     // utilizando as seguintes fórmulas:

//     // - para homens: (72.7 * Altura) – 58
//     // - para mulheres: (62.1 * Altura) – 44.7

//     let altura = parseFloat(prompt('Digite a altura (exemplo: 1.70):'))
//     let genero = parseInt(prompt('Digite o sexo (1 para feminino e 2 para masculino):'))
//     let pesoIdeal

//     if (genero === 1) {
//         pesoIdeal = (62.1 * altura) - 44.7
//     } else if (genero === 2) {
//         pesoIdeal = (72.7 * altura) - 58
//     } else {
//     alert("Opção de sexo inválida. Por favor, insira 1 para feminino ou 2 para masculino.");
//     }

//     if (pesoIdeal) {
//         document.write(`O peso ideal é aproximadamente ${pesoIdeal.toFixed(1)} kg.`);
//     }

//  //     11. Utilizando Switch, faça um programa que pergunte em que turno
//     // você estuda. Peça para digitar “M” para matutino ou “V” para
//     // vespertino ou “N” para noturno. Mostre um alerta com a mensagem
//     // “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
//     // conforme o caso.

//     let turno = prompt('Em qual turno você estuda? M para manhã, V para vespertino e N para noturno:')

//     switch (turno) {
//         case "M":
//             alert("Bom dia!")
//             break;
//         case "V":
//             alert("Boa tarde!")
//             break;
//         case "N":
//             alert("Boa noite!")
//             break;
//         default:
//             alert("Valor inválido.")
//     }

//  //     12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
//     // programa que armazene a idade de uma pessoa e diga se ela pode
//     // doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
//     // (&&).

//     const idade = parseInt(prompt('Digite sua idade:'))

//     if (idade >= 18 && idade <= 67) {
//         document.write('Você pode doar sangue!')
//     } else {
//         document.write('Vocâ não pode doar sangue!')
//     }

//      // 13. Faça um algoritmo que armazene um número e imprima os
//     // números ímpares entre 1 e o número armazenado.

//     let numero = parseInt(prompt('Digite um número.'))
//     let contador = 1

//     for (let i = 1; i <= numero; i++) {
//         if (i % 2 === 1) {
//             document.write(`${i} <br> <h4>`)
//         }
        
//     }

// //     14. Leia um número, utilizando WHILE multiplique este número por 3
//     // enquanto a soma seja menor que 500 e no final mostre qual o
//     // último valor

//     let numero = parseInt(prompt('Digite um número:'))
//     let resultado = numero

//     while (resultado * 3 < 500) {
//         resultado = resultado * 3
//     }
//     document.write(` O último valor multiplicado por 3 é: ${resultado}`)
    
// //     15. Crie um algoritmo que armazene três valores, para cada um dos
// // lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// // formam realmente um triângulo. Se formar, deve mostrar no console
// // o tipo de triângulo: isósceles, escaleno ou equilátero.

// // a. Para verificar se os lados fornecidos formam um triângulo: A <
// // B + C e B < A + C e C < A + B.

// // b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// // B=C);

// // c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// // B<>C e A<>C);

// // d. Triângulo equilátero: possui todos os lados iguais (A=B e
// // B=C);

// let A = parseFloat(prompt("Digite o valor do lado A:"));
// let B = parseFloat(prompt("Digite o valor do lado B:"));
// let C = parseFloat(prompt("Digite o valor do lado C:"));

// if (A < B + C && B < A + C && C < A + B) {
//     if (A === B || A === C || B === C) {
//         document.write(`Seu triângulo é isósceles.`);
//     } else if (A === B && B === C) {
//         document.write(`Seu triângulo é equilátero.`);
//     } else {
//         document.write(`Seu triângulo é escaleno.`);
//     }
// } else {
//     document.write('Os lados fornecidos não formam um triângulo.');
// }

// // 16. Escreva um algoritmo que armazene o ano atual e o ano de
// // nascimento de uma pessoa. Escrever uma mensagem no console
// // que diga se ela poderá ou não votar este ano (não é necessário
// // considerar o mês em que a pessoa nasceu).

// const year = 2023;
// const bornyear = parseInt(prompt('Digite seu ano de nascimento:'));
// const idade = year - bornyear;

// if (idade >= 16) {
//     document.write('Você pode votar!');
// } else {
//     document.write('Você não pode votar!');
// }

// //     17. Escreva um algoritmo que armazene o número total de eleitores de
// // um município, o número de votos brancos, nulos e válidos. Calcular
// // e escrever o percentual que cada um representa em relação ao
// // total de eleitores. O algoritmo deve fazer uma validação para que as
// // porcentagens dos votos armazenados (brancos, nulos e válidos)
// // respeitem o limite do número total de eleitores, ou seja, garantir que
// // a soma dos votos brancos, nulos e válidos não seja maior que o
// // número total de eleitores.

// const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
// let votosBrancos = parseInt(prompt("Digite o número de votos em branco:"));
// let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
// let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));


// if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
    
//     let percentualBrancos = (votosBrancos / totalEleitores) * 100;
//     let percentualNulos = (votosNulos / totalEleitores) * 100;
//     let percentualValidos = (votosValidos / totalEleitores) * 100;

//     document.write(`Percentual de votos em branco: ${percentualBrancos.toFixed(2)}% <br>`);
//     document.write(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}% <br>`);
//     document.write(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
// } else {
//     document.write("A soma dos votos brancos, nulos e válidos não pode ser maior que o número total de eleitores.");
// }

// //     18. Uma loja de eletrodomésticos estabeleceu as seguintes
// // modalidades de pagamento para a venda de suas mercadorias:

// // Á vista: desconto de 2,5% sobre o preço de tabela;
// // De 2 até 5 vezes: preço de tabela, sem desconto ou acréscimo;
// // De 6 até 10 vezes: juros de 6% sobre o preço de tabela;
// // De 11 até 15 vezes: juros de 13% sobre o preço de tabela.

// // Escreva um algoritmo que armazene o preço de tabela e o número
// // de vezes em que o pagamento será feito. Calcule o valor de cada
// // parcela e o preço total da compra e imprima no console.

// const precoTabela = parseFloat(prompt("Digite o preço de tabela:"));
// const numParcelas = parseInt(prompt("Digite o número de parcelas:"));

// let precoTotal;
// let valorParcela;

// if (numParcelas === 1) {
    
//     precoTotal = precoTabela * 0.975; // 100% - 2.5% = 97.5%
//     valorParcela = precoTotal;

// } else if (numParcelas >= 2 && numParcelas <= 5) {
    
//     precoTotal = precoTabela;
//     valorParcela = precoTotal / numParcelas;

// } else if (numParcelas >= 6 && numParcelas <= 10) {
   
//     precoTotal = precoTabela * 1.06; // 100% + 6% = 106%
//     valorParcela = precoTotal / numParcelas;

// } else if (numParcelas >= 11 && numParcelas <= 15) {

//     precoTotal = precoTabela * 1.13; // 100% + 13% = 113%
//     valorParcela = precoTotal / numParcelas;

// } else {
//     document.write("Número de parcelas inválido.");
// }

// document.write(`O valor total da compra é R$ ${precoTotal.toFixed(2)} <br>`);
// document.write(`O valor de cada parcela é R$ ${valorParcela.toFixed(2)}`);