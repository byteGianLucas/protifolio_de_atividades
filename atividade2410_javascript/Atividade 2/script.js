// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

let numero = prompt('Digite o número da semana.')

if (numero) {
    switch (numero) {
        case '1':
            numero = 'Segunda-feira';
            break;

        case '2':
            numero = 'Terça-feira';
            break;

        case '3':
            numero = 'Quarta-feira';
            break;

        case '4':
            numero = 'Quinta-feira';
            break;

        case '5':
            numero = 'Sexta-feira';
            break;

        case '6':
            numero = 'Sábado';
            break;

        case '7':
            numero = 'Domingo';
            break;
        }

        document.write(`O nome do dia é: ${numero} <br> `)
        
}