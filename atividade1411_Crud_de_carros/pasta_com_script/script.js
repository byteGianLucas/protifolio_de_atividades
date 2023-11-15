// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

function mensagemInicial() {
    alert(`Bem-vindo ao sistema de CRUD de veículos:\n\nNo momento, o sistema tem ${carros.length} carros cadastrados`)
}

// Escolha uma das opções para interagir com o sistema:

function menu() {
    while (true) {
        const opcao = prompt(
            'Escolha uma opção:\n' +
            '1 - Cadastrar veículo\n' +
            '2 - Listar veículos\n' +
            '3 - Listar veículos por marca\n' +
            '4 - Atualizar veículo\n' +
            '5 - Remover veículo\n' +
            '6 - Sair do sistema'
        );

        switch (opcao) {
            case '1':
                cadastrarVeiculo()
                break
            case '2':
                listar()
                break
            case '3':
                listarMarca()
                break
            case '4':
                atualizarVeiculo()
                break
            case '5':
                removerVeiculo()
                break
            case '6':
                sairDoSistema()
                return
            default:
                alert('Opção inválida. Tente novamente.')
        }
    }
}

mensagemInicial()
menu()

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

function cadastrarVeiculo() {
    while (true) {
        const confirmacao = confirm('Deseja cadastrar um novo veículo?');

        if (confirmacao) {
            const modelo = prompt('Digite o modelo do carro:')
            const marca = prompt('Digite a marca do carro:')
            const ano = prompt('Digite o ano do carro:')
            const cor = prompt('Digite a cor do carro:')
            const preco = prompt('Digite o preço do carro:')

            const novoCarro = {
                id: Date.now(),
                modelo: modelo,
                marca: marca,
                ano: ano,
                cor: cor,
                preco: preco,
            }

            carros.push(novoCarro)

            alert('Carro cadastrado com sucesso!')
        } else {
            alert('Cadastro de veículo cancelado.')
            break
        }
    }
}

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

function listar() {
    console.log(carros)
}

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

function listarMarca() {
    const marcaFiltrar = prompt('Digite a marca que deseja filtrar:')
    const veiculosFiltrados = carros.filter(veiculo => veiculo.marca === marcaFiltrar)

    let listaFiltrada = `Veículos da marca ${marcaFiltrar}\n`

    veiculosFiltrados.forEach(veiculo => {
        listaFiltrada += `Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}\n`
    })

    console.log(listaFiltrada)
}


// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

function atualizarVeiculo() {
    const idAtualizar = parseInt(prompt('Digite o IDENTIFICADOR do veículo que deseja atualizar:'))

    const veiculoAtualizar = carros.find(veiculo => veiculo.id === idAtualizar)

    if (!veiculoAtualizar) {
        alert('Veículo não encontrado. Volte para o menu inicial.')
        return
    }

    const novaCor = prompt('Digite a nova cor do veículo:')
    const novoPreco = prompt('Digite o novo preço do veículo:')

    veiculoAtualizar.cor = novaCor
    veiculoAtualizar.preco = novoPreco

    alert('Veículo atualizado com sucesso!')

    console.log(veiculoAtualizar)
}

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

function removerVeiculo() {
    const idRemover = parseInt(prompt('Digite o IDENTIFICADOR do veículo que deseja remover:'))

    const indiceVeiculo = carros.findIndex(veiculo => veiculo.id === idRemover)

    if (indiceVeiculo === -1) {
        alert('Veículo não encontrado. Volte para o menu inicial.')
        return
    }

    const veiculoRemovido = carros.splice(indiceVeiculo, 1)[0]

    alert('Veículo removido com sucesso!')
    console.log('Veículo removido:', veiculoRemovido)
}

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

function sairDoSistema() {
    alert('Saindo do sistema. Até logo!');
}