// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:

// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let heightPedro = 150
let heightLucas = 110
let year = 0 

while (heightPedro >= heightLucas) {
    heightPedro += 2
    heightLucas += 3
    year += 1
} 

document.write(`Lucas e Pedro alcançaram o mesmo tamanho em ${year - 1} anos. <br>`)
document.write(`Lucas será maior que Pedro em ${year} anos. <br>`)