function promptTexto() {
    const digiteTexto = prompt(`Digite seu nome:`)
    const nomeUsuario = digiteTexto
    const textoAMudar = document.querySelector('#text1')
    textoAMudar.innerText = `E aí ${digiteTexto}! Você está deixando o seu site dinâmico.`
}

let contador = 0;
let textContador = document.getElementById('textContador');

function increment() {
    contador++;
    textContador.innerText = `O contador está com ${contador} cliques`;
}

function zerar() {
    contador = 0;
    textContador.innerText = ``;
}