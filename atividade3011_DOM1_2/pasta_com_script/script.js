//ATIVIDADE 1

// 1. Crie uma página HTML que tenha um botão com o texto CLIQUE
// AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo
// que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...
// Ao clicar no botão deve ser chamado o prompt para o usuário
// digitar o nome dele, assim que o usuário digitar o nome dele o texto
// do parágrafo deve ser alterado para "E aí
// NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site
// dinâmico."

// 2. Crie uma página que tenha o título "Contador de Cliques". Na
// página deve ter 2 botões, um deles deve estar escrito INCREMENTAR
// e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos
// botões deve ter um parágrafo contendo a seguinte frase "O
// contador está com 0 cliques".

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

//ATIVIDADE 2

// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.

// 2. Capture, armazene e manipule todos os elementos de classe
// "titulo-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

// 3. Modifique o texto dos títulos nos cards para "Meu card".

// 4. Capture, armazene e manipule todos os elementos de classe
// "descricao-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.

// 5. Modifique o texto das descrições nos cards para "Descrição
// modificada pelo JavaScript".

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

// 7. Capture, armazene e manipule todos os elementos de classe
// "botao-apagar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.

// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".

// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".

let card = document.querySelectorAll('.card')

card.forEach(function (card) {
    card.style.backgroundColor = 'rgba(224,111,36,255)'
})

let titulo = document.querySelectorAll('.titulo-card')

titulo.forEach(function (titulo) {
    titulo.style.margin = '20px'
    titulo.style.color = '#2b385b'
    titulo.innerText = 'Meu card'
})

let descricao = document.querySelectorAll('.descricao-card')

descricao.forEach(function (descricao) {
    descricao.style.marginTop = '30px'
    descricao.style.color = 'white'
    descricao.innerText = 'Descrição modificada pelo JavaScript.'
})

let editar = document.querySelectorAll('.botao-editar')

editar.forEach(function (editar) {
    editar.style.marginTop = '30px'
    editar.style.backgroundColor = 'green'
    editar.style.color = 'white'
    editar.style.width = '60px'
    editar.style.height = '40px'
    editar.style.borderRadius = '15px'
    editar.style.border = 'none'
    editar.setAttribute('onclick', 'editarCard()')
})

let apagar = document.querySelectorAll('.botao-apagar')

apagar.forEach(function (apagar) {
    apagar.style.marginTop = '30px'
    apagar.style.backgroundColor = 'red'
    apagar.style.color = 'white'
    apagar.style.width = '60px'
    apagar.style.height = '40px'
    apagar.style.borderRadius = '15px'
    apagar.style.border = 'none'
    apagar.setAttribute('onclick', 'apagarCard()')
})

function editarCard() {
    alert('Clicou em Editar!')
}

function apagarCard() {
    let confirmar = confirm('Você tem certeza?')

    if (confirmar === true) {
        alert('Confirmado!')
    } else {
        alert('Cancelou!')
    }
}



