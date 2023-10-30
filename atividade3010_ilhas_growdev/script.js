// Contextualização do desafio:
// As Ilhas Growdev formam um reino independente nos mares do Pacífico.
// Como é um reino recente, a sociedade é muito influenciada pela
// informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
// GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
// programação dos caixas automáticos de um grande banco das Ilhas
// Growdevs.

// Tarefa:
// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
// notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
// clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
// um certo número inteiro de GrowCoins.
// Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
// desejado pelo cliente, determine o número de cada uma das notas
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

// Exemplo de entrada:
// 72
// Exemplo de saída:
// GC$ 50,00 -> 1

// GC$ 10,00 -> 2
// GC$ 5,00 -> 0
// GC$ 1,00 -> 2

let valorSaque = Number(prompt("Digite o valor em Growcoins que deseja retirar:"));
let gc50 = 0;
let gc10 = 0;
let gc5 = 0;
let gc1 = 0;

while ( valorSaque >= 50) {
    valorSaque -= 50;
    gc50++;
}
while ( valorSaque >= 10) {
    valorSaque -= 10;
    gc10++;
}
while ( valorSaque >= 5) {
    valorSaque -= 5;
    gc5++;
    
} while ( valorSaque >= 1) {
    valorSaque -= 1;
    gc1++;
}

// gc1 = valorSaque;

document.write(`<br/><br/> GC$ 50,00 = ${gc50}`);
document.write(`<br/><br/> GC$ 10,00 = ${gc10}`);
document.write(`<br/><br/> GC$ 5,00 = ${gc5}`);
document.write(`<br/><br/> GC$ 1,00 = ${gc1}`);