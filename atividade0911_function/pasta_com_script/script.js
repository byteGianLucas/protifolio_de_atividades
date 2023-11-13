// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
        // uma letra. Se a letra for A a função deve calcular a média aritmética,
        // se for P, a média ponderada (peso: 5, 3 e 2).

        function mediaAluno2(notas, metodo) {
            const [nota1, nota2, nota3] = notas

            if (metodo === 'A')
                return (nota1 + nota2 + nota3) / 3

            if (metodo === 'P')
                return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

            return null
        }

        const notas = [9, 8, 10]
        const metodo = 'A'
        console.log(mediaAluno2([9, 8, 10],  'A'))
        document.write('<h1> ACESSE O CONSOLE </h1>')

//2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
        // for ímpar ou falso se for par.

        function verNumero(numero) {
            return numero % 3 === 0
        }

        console.log(verNumero(5))
        document.write('<h1> ACESSE O CONSOLE </h1>')

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
        // positivo e retorne verdadeiro se o número for primo ou falso se não
        // for.

        // let numero = 2

        // function primo(numero) {
        //     if (numero === 2) return true

        //     for (let i = 2; i < numero; index++) {
        //         if (numero % i ===0) 
        //             return false                
        //     }
        // }

        let numero = 5    

        function primo(numero) {
            if (numero === 2) return true
            if (numero % 2 === 0) return false
        
            for (let i = 3; i * i <= numero; i += 2) {
                if (numero % i === 0)
                    return false
            }
            return true
        }
        
        console.log(primo(10))
        document.write('<h1> ACESSE O CONSOLE </h1>')   
        
// 4. Crie uma função que recebe por parâmetro o tempo de duração de
        // uma fábrica expressa em segundos e retorna esse tempo em horas,
        // minutos e segundos.

        // Ex:
        // Entrada: 3672
        // Saída: 1:1:12

        let segundos = 3672;

        function converter(segundos) {
            const horas = Math.floor(segundos / 3600)
            segundos %= 3600
            const minutos = Math.floor(segundos / 60)
            segundos %= 60
            return `${horas}:${minutos}:${segundos}`
        }

        const tempoSegundos = 3672

        console.log(converter(tempoSegundos))
        document.write('<h1> ACESSE O CONSOLE </h1>')

//5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
        // é um valor perfeito ou falso se não for. Um valor é dito perfeito
        // quando ele é igual a soma dos seus divisores excetuando ele
        // próprio.

        // Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores


        function numeroPerfeito(valor) {
            if (valor <= 1) {
                return false
            }

            let soma = 1

            for (let i = 2; i < valor; i++) {
                if (valor % i === 0) {
                    soma += i
                }
            }

            return soma === valor
        }

        console.log(numeroPerfeito(8))
        document.write('<h1> ACESSE O CONSOLE </h1>')

// 7. Crie uma função chamada mostrarMensagem() que não tenha
        // parâmetro. Esta função será chamada ao abrir a página e mostrará
        // uma mensagem no console.log() informando “Acesso à aplicação
        // NomeAplicação” e um alerta informando “Bem vindo à aplicação
        // NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
        // uma variável para mostrar nas mensagens.

        function mostrarMensagem() {
            let nomeAplicacao = "NomeAplicacao";

            console.log(`Acesso à aplicação ${nomeAplicacao}`);
            alert(`Bem vindo à aplicação ${nomeAplicacao}`);
        }

        mostrarMensagem();

// 8. Crie uma função chamada mostrarDobro(num), que recebe um
        // parâmetro sendo um número inteiro. Esta função será chamada ao
        // abrir a página e mostrará um alerta com o resultado. Exemplo: “O
        // dobro do número 5 é 10.”

        function mostrarDobro(num) {
            let dobro = num * 2
            alert(`O dobro do número ${num} é ${dobro}.`)
        }

        mostrarDobro(5)


// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
        // nome), que recebe 4 parâmetros sendo três inteiros e um texto
        // (String). Esta função será chamada ao abrir a página e mostrará um
        // alerta com a média. Exemplo: “João, sua média é 70.” A função
        // também deve mostrar no console.log() as notas recebidas. Exemplo
        // “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

        function calcularMedia(nota1, nota2, nota3, nome) {
            let media = (nota1 + nota2 + nota3) / 3;
            console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}`)
            alert(`${nome}, sua média é ${media}.`)
        }
            
        calcularMedia(60, 70, 80, "João")