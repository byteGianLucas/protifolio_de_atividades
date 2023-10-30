// // 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// // município, o número de votos brancos, nulos e válidos. Calcular e
// // escrever o percentual que cada um representa em relação ao total
// // de eleitores.

const votosBrancos = 150
const votosNulos = 100
const votosTotal = 1000

const percentualBrancos = (votosBrancos / votosTotal) * 100
const percentualNulos = (votosNulos / votosTotal) * 100
const percentualValidos = ((votosTotal - votosBrancos - votosNulos) / votosTotal) * 100

document.write(` <h3/> Percentual de votos brancos: ${percentualBrancos.toFixed(0)}% <h3/> Percentual de votos nulos: ${percentualNulos.toFixed(0)}% <h3/>
Percentual de votos válidos: ${percentualValidos.toFixed(0)}%`)