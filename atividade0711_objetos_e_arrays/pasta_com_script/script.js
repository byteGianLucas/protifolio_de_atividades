        // 1. Crie um objeto em JavaScript para colocar dois atributos de um
        // produto. Atribua o preço e descrição do produto com o valor “90” e a
        // descrição com o valor “Mouse”. Mostre no console o valor dos dois
        // atributos.

        const produtos = {
            nome: 'Teclado',
            preco: '250'
        }

        document.write(`<h1> ${produtos.nome} </h1>`)
        document.write(`<h1> ${produtos.preco} </h1>`)

        // 2. Crie um objeto em JavaScript para colocar 5 atributos de um
        // notebook. Atribua os seguintes atributos:

        // Processador = i7
        // Memória = 16GB
        // Preço = 5000
        // HD = 1TB
        // SSD = 256GB

        // Por fim, mostre o nome e valor de cada atributo no console,
        // exatamente como está na atividade.

        const computador = {
            processador: 'i7',
            memoria: '16GB',
            preco: 5000,
            hd: '1TB',
            ssd: '256GB',
        }

        document.write(`<h1> Processador: ${computador.processador} </br> Memória: ${computador.memoria} </br>
        Preço: R$${computador.preco} </br> HD: ${computador.hd} </br> SSD: ${computador.ssd} </h1>`)

  // 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
        // duas notas para o primeiro objeto, que será nosso primeiro aluno.
        // Agora crie mais um objeto para colocar informações do nosso
        // segundo aluno. Mostre as informações de cada aluno no console.
        // Mostre também a média do primeiro aluno e a média do segundo
        // aluno. Por fim mostre a média desta turma de 2 alunos.

        const objeto = {
            nome: 'Gian Lucas',
            nota1: 10,
            nota2: 9,
        }
        
        const obj = {
            nome: 'Marcelo',
            nota1: 9,
            nota2: 9,
        }

        document.write(`<h2> O aluno ${objeto.nome} teve as notas: ${objeto.nota1} e  ${objeto.nota2} e a média ficou: ${objeto.nota1 + objeto.nota2 / 2} </h2></br>`)
        document.write(`<h2> O aluno ${obj.nome} teve as notas: ${obj.nota1} e  ${obj.nota2} e a média ficou: ${obj.nota1 + objeto.nota2 / 2.}</h1>.</h2>`)

 // 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
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

        let desempregados = []
        let empregoMenos2500 = []
        let empregoMais2500 = []
        let continuar = true

        while (continuar) {
            let nome = prompt('Digite o nome:')
            let idade = Number(prompt('Digite a idade:'))
            let trabalho = confirm('Está trabalhando?')

            let salario

            if (trabalho) {
                salario = parseFloat(prompt("Informe o salário da pessoa:"));
            } else {
                salario = null;
            }

            let pessoa = {
                nome,
                idade,
                trabalho,
                salario,
            }

            if (pessoa.trabalho) {
                if (pessoa.salario < 2500) {
                    empregoMenos2500.push(pessoa)
                } else {
                    empregoMais2500.push(pessoa)
                }
            } else {
                desempregados.push(pessoa)
            }

            continuar = confirm('Deseja continuar?')
        }


document.write('Desempregados: </br>') 

for (let pessoa of desempregados) { 
    document.write(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} </br>`)
}
document.write(" </br> Empregados com salários menores que 2500: </br>");
for (let pessoa of empregoMenos2500) {
    document.write(`Nome: ${pessoa.nome} |  Idade: ${pessoa.idade} | Salário: ${pessoa.salario} </br>`);
}

document.write("</br> Empregados com salários maiores que 2500: </br>");
for (let pessoa of empregoMais2500) {
    document.write(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | Salário: ${pessoa.salario}`);
}