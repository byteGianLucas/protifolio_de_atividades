let nome = ""
  let genero = ""
  let valorCompra = ""
  nome = prompt('Digite seu nome')
  genero = prompt('Digite F para feminino e M para Masculino').toUpperCase()
  valorCompra = Number(prompt("Digite valor da compra"))

  if (genero === 'F') {
    valorCompra = valorCompra * 0.87
  } else if (genero === 'M') {
    valorCompra = valorCompra * 0.95
  } else {
    alert("Caracter inválido")
  }
  document.write(`O valor final da compra foi de ${valorCompra}`)