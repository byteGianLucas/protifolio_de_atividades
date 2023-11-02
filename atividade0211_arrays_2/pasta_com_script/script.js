// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
        // inteiros já preenchido e imprima todos os valores pares.

        // let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        
        // for (let elemento of elementos) {
        //     if (elemento % 2 === 0 ) {
        //         document.write(`<h1> ${elemento} <br> </h1>`)
            
        //     }
        // }

// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos 
// inteiros e no final mostre a soma de todos os elementos.

        // let elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        // let soma = 0
        
        // for (let i = 0; i < elementos.length; i++) {           
        //     soma += elementos[i]
        // }
        // document.write(`<h1>A soma de todos os elementos é: ${soma} </h1>`)

// 3. Desenvolva um algoritmo que preenche um vetor com os 4
        // primeiros números perfeitos.

        // let numerosPerfeitos = [];
        // let numeroAtual = 2;

        // while (numerosPerfeitos.length < 4) {
        //     let somaDivisores = 0;
        //     for (let i = 1; i < numeroAtual; i++) {
        //         if (numeroAtual % i === 0) {
        //             somaDivisores += i;
        //         }
        //     }

        //     if (somaDivisores === numeroAtual) {
        //         numerosPerfeitos.push(numeroAtual);
        //     }

        //     numeroAtual++;
        // }

        // document.write(`<h1> ${numerosPerfeitos} </h1>`)

// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

        // let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // let usuario = parseInt(prompt('Tente adivinhar o número!'))
        // let encontrado = false

        // for (let i = 0; i < numeros.length; i++) {
        //     if (numeros[i] === usuario) {
        //         encontrado = true
        //         break
        //     }
            
        // } 

        // if (encontrado) {
        //     document.write(`<h1> O número ${usuario} está na lista. </h1>`)
        // } else {
        //     document.write(`<h1> O número ${usuario} não está na lista. </h1>`)
        // }

// 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

        // let nomes = [];


        // for (let i = 0; i < 5; i++) {
        //     let nome = prompt(`Digite o ${i+1}º nome:`);
        //     nomes.push(nome);
        // }

        // document.write(`<h1> Acesse o console! </h1>`)
        // console.log(`Nomes digitados:`);
        // console.log(nomes.join(`, `));

        // console.log(`Nomes na ordem inversa:`);
        // console.log(nomes.reverse().join(", "));        