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

let idade = prompt('Digite sua idade.')
let peso = prompt('Digite seu peso.')

if (idade <= 12) {
    status = 'Infantil'
    
} else if (idade >= 13 && idade <= 16)  { 
    if (peso <= 40) {
        status = 'Juvenil leve'
    } else {
        status = 'Juvenil pesado'
    }

} else if (idade >= 17 && idade <= 24) { 
    if (peso <= 45) {
        status = 'Sênior leve'
    } else if (peso > 45 && peso < 60) {
        status = 'Sênior médio'
    } else if (peso > 60) 
        status = 'Sênior pesado'
} else {
    status='Veterano'
}
document.write(status)