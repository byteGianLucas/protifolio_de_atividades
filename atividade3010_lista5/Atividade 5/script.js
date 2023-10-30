let distancia = Number(prompt("Qual é a distância que você deseja percorrer em Km?"));
let preco;

if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

document.write(`O preço da passagem é R$${preco.toFixed(2)}`);