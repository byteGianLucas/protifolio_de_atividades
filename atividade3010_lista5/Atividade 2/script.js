let salarioHomens = 0
  let salarioMulheres = 0
  continuar = true

  while (continuar) {

    salario = Number(prompt('Qual o salário?'))
    sexo = prompt('O salário é pago a um homem ou a uma mulher')
    if (sexo === "homem") {
      salarioHomens += salario
    }
    else if (sexo === "mulher") {
      salarioMulheres += salario
    }
    continuar = confirm('Deseja continuar?')

  }

  document.write(`O salário pago aos homens é de R$${salarioHomens}`)
  document.write(`<br> O salário pago as mulheres é de R$${salarioMulheres}`)