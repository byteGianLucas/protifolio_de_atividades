let idade = 0;
let contador = 0;
let totalIdade = 0;

  while (idade !== 999) {
    idade = Number(prompt("Digite sua idade: "));
    if (idade !== 999) {
      totalIdade += idade;
      contador++;
    }
  }
console.log(`Média: ${(totalIdade / contador).toFixed(2)}`)
console.log(`Total de alunos: ${contador}`) 