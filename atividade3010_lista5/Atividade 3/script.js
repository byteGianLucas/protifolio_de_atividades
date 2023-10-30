const inicial = Number(prompt('Insira o valor inicial:'))
  const final = Number(prompt('Insira o valor final:'))
  const incremento = Number(prompt('Insira o valor de incremento:'))

  document.write('Contagem: ')
  document.write(inicial)
  for (let valor = inicial; valor < final; valor += incremento) {
    document.write(valor + " ")
  }
  document.write(final)
  document.write("Acabou!")