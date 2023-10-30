// Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

const celsius = prompt('Digite os graus celsius')
const fahrenheit = (celsius * 9) / 5 + 32
document.write(` ${celsius}°C equeivalem a ${fahrenheit}°F <br> `)