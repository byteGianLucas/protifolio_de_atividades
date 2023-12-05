// 1. Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
// botão calcular efetuar os cálculos solicitados na página.

document.querySelector("#btn_calcular").addEventListener('click', () => {
    const totalReceita = document.getElementById("valor_receita")
    const totalDescontos = document.getElementById("valor_descontos")
    const total = document.getElementById("valor_total")

    total.value = Number(totalReceita.value) - Number(totalDescontos.value)
})


// 2. Alterar o cálculo do botão calcular para que a cada vez que o
// usuário digitar um valor e sair do input o formulário seja
// automaticamente recalculado.

//RECEITAS

const total = document.getElementById("valor_receita")
const valorAlimentacao = document.getElementById("valor_alimentacao")
const valorReceita = document.getElementById("valor_transporte")
const valorBase = document.getElementById("valor_base")

total.value = Number(valorAlimentacao.value)+Number(valorReceita.value)+Number(valorBase.value)

valorAlimentacao.addEventListener('change',()=>{
    total.value = Number(valorAlimentacao.value)+Number(valorReceita.value)+Number(valorBase.value)
})
valorBase.addEventListener('change',()=>{
    total.value = Number(valorAlimentacao.value)+Number(valorReceita.value)+Number(valorBase.value)
})
valorReceita.addEventListener('change',()=>{
    total.value = Number(valorAlimentacao.value)+Number(valorReceita.value)+Number(valorBase.value)
})

//DESCONTOS

const valorAutomovel =document.getElementById("valor_automovel")
const faltas = document.getElementById("faltas")
const descontos = document.getElementById("valor_descontos")

faltas.addEventListener('change',()=>{
    descontos.value = Number(faltas.value)+Number(valorAutomovel.value)

})

valorAutomovel.addEventListener('change',()=>{
    descontos.value = Number(faltas.value)+Number(valorAutomovel.value)

})
