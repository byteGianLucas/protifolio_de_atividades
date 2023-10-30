// Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.

// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.



let saldo = parseFloat(prompt('Digite o saldo.'))
let retirada = parseFloat(prompt('Digite o valor do saque.'))

if (retirada < saldo && retirada % 5 === 0) {
    saldo = saldo - (retirada + 4.50)
    status = 'Saque realizado com sucesso.'

} else if (retirada < saldo && retirada % 5 != 0) {
    status = 'Só temos troco de 5 em 5.'
}
 else (
    status = 'Operação inválida, sem saldo suficiente.'
) 
alert(`${status} Seu saldo é de R$ ${saldo.toFixed(2).replace('.' , ',')}`)