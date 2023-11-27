// MENU
let continuar = true;
while (continuar) {
    const opcao = prompt(
        'Escolha uma opção:\n' +
        '1 - Cadastrar produtos.\n' +
        '2 - Listar produtos.\n' +
        '3 - Listar por ordem de preço.\n' +
        '4 - Listar por ordem alfabética.\n' +
        '5 - Somar estoques. \n' +
        '6 - Fazer pedidos. \n' +
        '7 - Remover pedidos. \n' +
        '8 - Editar pedidos. \n' +
        '9 - Relatório diário. \n' +
        '10 - Sair. \n'
    );

    switch (opcao) {
        case '1':
            cadastrarProdutos();
            break;
        case '2':
            listarProdutos();
            break;
        case '3':
            ordemDePreco();    
            break;
        case '4':
            ordemDeNome();    
            break;
        case '5':
            somarEstoque();    
            break;
        case '6':
            fazerPedidos();    
            break;
        case '7':
            removerProduto()
            break;
        case '8':
            editarProduto()
            break;
        case '9':
            relatorioDiario()
            break;
        case '10':
            continuar = false;
            alert('Saindo do programa.');
            break;
        default:
            alert('Opção inválida. Tente novamente.');
    }
}

// Listar Todos os Produtos Disponíveis: O sistema deve ser capaz de exibir uma lista de todos os 
// produtos disponíveis na padaria. João vai poder escolher no momento entre listagem simplificada, 
// por ordem de preço, ou por ordem alfabética.

const produtos = [
    { id: 1, nome: 'Pão', estoque: 50, preco: 1.5, disponibilidade: true },
    { id: 2, nome: 'Bolo', estoque: 10, preco: 15, disponibilidade: true },
    { id: 3, nome: 'Croissant', estoque: 20, preco: 2.5, disponibilidade: true },
];

function listarProdutos() {
    if (produtos.length === 0) {
        alert('Não há produtos cadastrados.');
        return;
    }

    let listaDeProdutos = 'Lista de produtos disponíveis:\n\n';
    let produtoDisponivel = false;

    produtos.forEach(produto => {
        if (produto.disponibilidade === true) {
            listaDeProdutos += `
                ID: ${produto.id}
                Nome: ${produto.nome}
                Estoque: ${produto.estoque}
                Preço: ${produto.preco}
                \n`;

            produtoDisponivel = true;
        }
    });

    if (!produtoDisponivel) {
        alert('Não há produtos disponíveis.');
    } else {
        alert(listaDeProdutos);
    }
}

function ordemDeNome() {
    const ordenarPorNome = produtos.filter(produto => produto.disponibilidade).sort((a, b) => a.nome(b.nome));
    if (ordenarPorNome.length === 0) {
        alert('Não há produtos disponíveis para ordenar por nome.');
    } else {
        let listaOrdenadaPorNome = 'Lista de produtos por ordem alfabética:\n\n';
        ordenarPorNome.forEach(produto => {
            listaOrdenadaPorNome += `
                ID: ${produto.id}
                Nome: ${produto.nome}
                Preço: ${produto.preco}\n\n`;
        });
        alert(listaOrdenadaPorNome);
    }
}

function ordemDePreco() {
    const ordenarPorPreco = produtos.filter(produto => produto.disponibilidade).sort((a, b) => a.preco - b.preco);
    if (ordenarPorPreco.length === 0) {
        alert('Não há produtos disponíveis para ordenar por preço.');
    } else {
        let listaOrdenadaPorPreco = 'Lista de produtos por ordem de preço:\n\n';
        ordenarPorPreco.forEach(produto => {
            listaOrdenadaPorPreco += `
                ID: ${produto.id}
                Nome: ${produto.nome}
                Preço: ${produto.preco}\n\n`;
        });
        alert(listaOrdenadaPorPreco);
    }
}

// Adicionar um Novo Produto ao Catálogo: O sistema deve permitir que o usuário adicione um novo produto ao catálogo. 
// O produto deve ser adicionado com um nome, preço e estoque.

function cadastrarProdutos() {
    while (true) {
        const confirmacao = confirm('Deseja cadastrar um novo produto?');

        if (confirmacao) {
            const nome = prompt('Digite o nome do produto:');
            const estoque = prompt('Digite o estoque do produto:');
            const preco = prompt('Digite o preço do produto:');

            const novoProduto = {
                id: produtos.length + 1,
                nome: nome,
                estoque: estoque,
                preco: preco,
                disponibilidade: true, // Adicionando a disponibilidade padrão como true
            };

            produtos.push(novoProduto);

            alert('Produto cadastrado com sucesso!');
        } else {
            alert('Cadastro de produto cancelado.');
            break;
        }
    }
}

// Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um 
// produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0.

function editarProduto(nomeProduto, novoPreco, novoEstoque) {
    const produtoIndex = produtos.findIndex(produto => produto.nome === nomeProduto);

    if (produtoIndex !== -1) {
        produtos[produtoIndex].preco = novoPreco;
        produtos[produtoIndex].estoque = Math.max(novoEstoque, 0);

        alert (`Produto ${nomeProduto} editado com sucesso. | 
        Novo preço: ${novoPreco} 
        Novo estoque: ${produtos[produtoIndex].estoque}`);
    } else {
        alert(`Produto ${nomeProduto} não encontrado no catálogo.`);
    }
}

// Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo.

function removerProduto() {
    const idRemover = parseInt(prompt('Digite o IDENTIFICADOR do produto que deseja remover:'));

    const indiceProduto = produto.findIndex((produto) => produto.id === idRemover);

    if (indiceProduto === -1) {
        alert('Produto não encontrado. Volte para o menu inicial.');
        return;
    }

    const produtoRemovido = produto.splice(indiceProduto, 1)[0];

    alert('Produto removido com sucesso!');
    console.log('Produto removido:', produtoRemovido);
}

// Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve 
// conter um ou mais produtos e a quantidade desejada de cada um. O sistema deve armazenar um histórico de pedidos. 

let pedidos = []
let vendas = []

function exibirMenu() {
    let menu = `Esses são os produtos disponiveis,`;

     produtos.forEach((produto, index) => {
        menu += `${index + 1} - ${produto.nome}\n`;
    });

    menu += 'Escolha o número correspondente ao produto desejado ou 6 para sair:';

    const escolha = Number(prompt(menu));
    return escolha - 1
}

function fazerPedidos(){
    let continuarPedido = true;

    while (continuarPedido) {
        const escolha = exibirMenu();
        const data = prompt('Insira a data do pedido:')

        if (escolha === -1) {
            continuarPedido = false;
        } else {
            const produtoSelecionado = produtos[escolha];
            alert(`Produto escolhido:\n Nome: ${produtoSelecionado.nome}\n Estoque: ${produtoSelecionado.estoque}\n Preço: R$${produtoSelecionado.preco.toFixed(2)}`);
        }
    }

    
    const produto = produtos.find(produto => produto.id == escolha)

    if (!produto) {
        alert("Produto não encontrado. O usuário deve voltar para o menu inicial depois.")
    } else {
        produtos.push(produto)
        pedidos.push(data)
        pedidos.push(produto)
        alert("Pedido feito com sucesso!")
    }
}

// Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque

function somarEstoque(produto) {
    const somaEstoque = produtos.reduce((acc, produto) =>{
        return acc + produto.preco * produto.estoque
    }, 0)
    alert(`O valor total do estoque é de R$${somaEstoque.toFixed(2)}`)
}

// Relatório Diarios: João deve poder fazer um relatório das vendas que aconteceram em um período 
// específico que ele selecionar. Deve conter quantas vendas foram realizadas e qual o faturamento.

function relatorioDiario(dataInicial, dataFinal) {

let vendasFiltradas = vendas.filter(venda => {
    let dataVenda = new Date(venda.data);
    return dataVenda >= dataInicial && dataVenda <= dataFinal;
});

let totalVendas = vendasFiltradas.reduce((total, venda) => total + venda.vendas, 0);
let totalFaturamento = vendasFiltradas.reduce((total, venda) => total + venda.faturamento, 0);


return {
    totalVendas: totalVendas,
    totalFaturamento: totalFaturamento
};
}

let dataInicial = new Date('2021-01-01');
let dataFinal = new Date('2021-01-10');
let relatorio = relatorioDiario(dataInicial, dataFinal);
alert(relatorio);

function converterData(dataString) {
    const partesData = dataString.split('-');
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1; // Mês começa do zero (janeiro = 0)
    const ano = 2000 + parseInt(partesData[2], 10); // Assumindo anos no formato de 2 dígitos

    return new Date(ano, mes, dia);
}


function relatorioDeVendas(dataInicial, dataFinal) {
    let vendasNoPeriodo = 0;
    let faturamentoNoPeriodo = 0;

    for (let i = 0; i < pedidos.length; i += 2) {
        const produto = pedidos[i];
        const dataPedido = converterData(pedidos[i + 1]);

        if (dataPedido >= converterData(dataInicial) && dataPedido <= converterData(dataFinal)) {
            vendasNoPeriodo++;
            faturamentoNoPeriodo += produto.preco;
        }
    }

    return { vendas: vendasNoPeriodo, faturamento: faturamentoNoPeriodo };

const periodoInicial = prompt('Insira a data inicial (formato dd-mm-yy):');
const periodoFinal = prompt('Insira a data final (formato dd-mm-yy):');

const resultadoRelatorio = relatorioDeVendas(periodoInicial, periodoFinal);
alert(`No período de ${periodoInicial} a ${periodoFinal}:`
`Vendas realizadas: ${resultadoRelatorio.vendas}`
`Faturamento total: R$${resultadoRelatorio.faturamento.toFixed(2)}`)
}