// // 3. Crie três variáveis, na primeira variável coloque o total de uma
// // compra, por exemplo 149.90. Na segunda variável coloque a
// // quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// // o valor da parcela. Apresente no documento html as seguintes
// // informações:
// // "O valor total da compra foi R$_,_"
// // "Forma de pagamento: _x de R$_,_"

const num1 = 149.90
const num2 = 2
const num3 = (num1 / num2)
document.write(` <h3/> Valor total da compra foi R$${num1.toFixed(2).replace(`.` , `,`)} <h3/>`)
document.write(`Forma de pagamento: ${num2}x de R$ ${num3.toFixed(2).replace(`.` , `,`)}`) 