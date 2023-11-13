// 1. Considere o seguinte array:

// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex

// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

    const indiceSalarioMaior7500 = salarios.findIndex(function (salario) {
        return salario > 7500
    })
    console.log(`Primeiro salário maior que 7.500: ${indiceSalarioMaior7500}`)


    const salariosMaiores8000 = salarios.filter(function (salario) {
        return salario > 8000
    });
    console.log(`Salários maiores que 8.000: ${salariosMaiores8000}`)
    document.write('<h1> ACESSE O CONSOLE </h1>')

// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:

// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];

// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"

    const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"]

    rainbow.splice(rainbow.indexOf("Preto"), 1)

    rainbow.splice(2, 0, "Amarelo", "Verde")

    rainbow.splice(5, 0, "Roxo")

    console.log(rainbow)
    document.write('<h1> ACESSE O CONSOLE </h1>')

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000        

    const pessoas = [];

    while (true) {
        const nome = prompt("Digite o nome da pessoa:")
        const idade = parseInt(prompt("Digite a idade da pessoa:"))
        const trabalhando = confirm("A pessoa está trabalhando?")
        let salario = 0

        if (trabalhando) {
            salario = parseFloat(prompt("Digite o salário da pessoa:"))
        }

        const pessoa = {
            nome: nome,
            idade: idade,
            trabalhando: trabalhando,
            salario: salario
        };

        pessoas.push(pessoa)

        const continuar = confirm("Deseja continuar cadastrando?")
        if (!continuar) {
            break
        }
    }

    const desempregadas = pessoas.filter(function(pessoa) {
        return !pessoa.trabalhando
    })

    const empregadasMenor2500 = pessoas.filter(function(pessoa) {
        return pessoa.trabalhando && pessoa.salario < 2500
    })

    const empregadasMaior2500 = pessoas.filter(function(pessoa) {
        return pessoa.trabalhando && pessoa.salario >= 2500
    })

    console.log("Pessoas desempregadas:")
    desempregadas.forEach(function(pessoa) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
    })

    console.log("\nPessoas empregadas com salários menores que 2500:")
    empregadasMenor2500.forEach(function(pessoa) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
    })

    console.log("\nPessoas empregadas com salários maiores que 2500:")
    empregadasMaior2500.forEach(function(pessoa) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
    })

    document.write('<h1> ACESSE O CONSOLE </h1>')