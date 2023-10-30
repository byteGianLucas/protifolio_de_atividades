let largura = Number(prompt("Digite a largura do terreno em metros:"));
let comprimento = Number(prompt("Digite o comprimento do terreno em metros:"));

let area = largura * comprimento;
let classificacao;

if (area < 100) {
    classificacao = "TERRENO POPULAR";
} else if (area >= 100 && area <= 500) {
    classificacao = "TERRENO MASTER";
} else {
    classificacao = "TERRENO VIP";
}

document.write(`A área do terreno é de ${area}m². <br>`);
document.write(`Classificação: ${classificacao}`);