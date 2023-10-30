// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custofabrica = Number(prompt('Custo de fábrica'))
const distribuidor = (28 * custofabrica) / 100 
const impostos = (45 * custofabrica) / 100 

let total = (custofabrica + distribuidor + impostos) 
document.write(`O preço do carro é de R$ ${total.toFixed(0).replace('.' , ',')}`)
