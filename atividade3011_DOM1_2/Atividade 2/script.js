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