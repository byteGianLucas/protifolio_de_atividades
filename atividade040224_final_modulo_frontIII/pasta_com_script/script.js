// // ---------------------------------------------------------------------------------------------------------------
// HTML 

// <!DOCTYPE html>
// <html lang="pt-BR">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Rick & Morty</title>
//     <link rel="stylesheet" href="style.css">
//     <link rel="shortcut icon" href="./assets/rick-and-morty.png" type="image/x-icon"/>
//     <script src="https://unpkg.com/@phosphor-icons/web"></script>
//   </head>

// <body>

//     <!-- Cabeçalho  -->
//     <header>

//       <img src="./image/RICK_MORTY_ICON.png">

//       <section id="input-container">

//         <h1>API de Rick and Morty</h1>

//         <div class="filter-container">
//           <div class="search-container">
//             <input id="buscador" type="text" placeholder="Pesquisar" oninput="search()" />
//             <img id="search-img" src="./image/lupa.image.png" alt="Lupa de pesquisa"/>
//           </div>
//         </div>

//       </section>
//     </header>

//     <!-- Paginação -->
//     <main id="container"></main>

//     <section id="pages-container">

//         <button id="anterior"> Anterior </button>
//         <span id="pages">  </span> 
//         <button id="proxima"> Próxima </button>

//     </section>

//     <!-- Rodapé -->
//     <footer>

//       <img src="./image/rick-and-morty.png" alt="Imagem de Rick e Morty" />

//       <div>
//         <section id="api-info">
//           <p>PERSONAGENS: <span id="personagens">0</span></p>
//           <p>LOCALIZAÇÕES: <span id="localizacoes">0</span></p>
//           <p>EPISÓDIOS: <span id="episodios">0</span></p>
//         </section>

//         <section id="developer-info">
//           <p>Desenvolvido por <strong> Gian Lucas </strong> em 2023 - 2024</p>
//         </section>
//       </div>

//     </footer>

//     <!-- Scripts -->
//     <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//     <script src="script.js"></script>
// </body>
// </html>

// // ---------------------------------------------------------------------------------------------------------------

// CSS

// @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   box-sizing: border-box;
//   font-family: "Open Sans", sans-serif;
// }

// body {
//   background: rgb(255, 255, 255)
// }

// header {
//   padding: 1rem;
// }

// header img {
//   height: 70px;
//   width: 70px;
// }


// /* Cabeçalho */
// #input-container > h1 {
//   font-size: 5rem;
//   color: green;
//   line-height: 1.6;
// }

// #input-container {
//   max-width: 900px;
//   width: 100%;
//   margin: 1rem auto;
//   text-align: center;
// }

// /* Barra de pesquisa */
// .filter-container input {
//   background-color: #fff;
//   margin-top: 2rem;
//   border: rgb(120, 117, 117) 2px solid;
//   padding: 1rem;
//   border-radius: 20px;
//   outline: none;
//   height: 40px;
//   max-width: 900px;
//   width: 100%;
//   margin: 1rem auto;
// }

// .filter-container img {
//   margin-right: 20px;
// }

// .search-container {
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background-color: #fff;
//   border: rgb(120, 117, 117) 2px solid;
//   border-radius: 20px;
// }

// #buscador {
//   width: 90%;
//   font-size: 1.75rem;
//   outline: none;
//   border: none; 
// }

// #search-img {
//   height: 35px;
//   width: 35px;
//   cursor: pointer;
// }

// /* Corpo */
// #container {
//   width: 100%;
//   margin: 2rem auto;
//   padding: 2rem;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 2rem;
// }

// /* Cards */
// .card {
//   max-height: 13rem;
//   width: 30%;
//   display: flex;
//   gap: 1rem;
//   background-color: rgba(247, 243, 243, 0.944);
  
// }

// .character-image {
//   width: 230px;
// }

// .character-info {
//   color: black;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
// }

// .character-info h2 {
//   font-size: 1.25rem;
//   color: green;
// }

// .character-info h3 {
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.6;
// }

// .character-info p {
//   color: gray;
// }


// #pages-container {
//   display: flex;
//   justify-content: center;
//   gap: 1.75rem;
//   font-size: 1.25rem;
// }

// #pages-container button {
//   font-size: 1.25rem;
//   background-color: green;
//   cursor: pointer;
//   padding: 17px;
//   color: white;
// }

// #pages-container button:hover {
//   border-bottom: 2px solid #44281d;
// }

// #pages {
//   display: flex;
//   gap: 0.875rem;
//   background-color: green;
//   padding: 17px;
//   color: white;
// }

// .current-page {
//   border-bottom: solid 2px;
// }

// /* Rodapé */
// footer img {
//   display: block;
//   width: 400px;
//   margin: 1rem auto;
// }

// footer div {
//   background-color: rgb(41, 40, 40);
//   padding: 5rem;
// }

// /* Informações da API */
// #api-info {
//   display: flex;
//   justify-content: center;
//   gap: 1.75rem;
// }

// #api-info p {
//   color: gray;
//   font-weight: 600;
// }

// #api-info p span {
//   color: gray;
// }

// #developer-info {
//   text-align: center;
//   margin-top: 3rem;
//   color: gray;
// }

// /* Linha */
// .horizontal-line {
//   height: 1px;
//   background-color: green;
//   margin: 10px 0;
//   border: none; 
//   width: 70%;
// }

// .hidden {
//   visibility: hidden;
// }

// // ---------------------------------------------------------------------------------------------------------------

// SCRIPT

// // API
// const charactersURL = "https://rickandmortyapi.com/api/character";
// const episodesURL = "https://rickandmortyapi.com/api/episode";
// const locationsURL = "https://rickandmortyapi.com/api/location";

// // Paginação
// let currentPage = 1;

// // Dados
// async function loadDataFromAPI() {
//   const charactersData = await axios.get(`${charactersURL}`);
//   const episodesData = await axios.get(`${episodesURL}`);
//   const locationsData = await axios.get(`${locationsURL}`);
//   return {
//     characters: charactersData.data,
//     episodes: episodesData.data,
//     locations: locationsData.data,
//   };
// }

// // Episódio
// async function loadEpisodeData(url) {
//   const episodesData = await axios.get(url);
//   return {
//     episodes: episodesData.data,
//   };
// }

// // Nome do episódio
// async function getEpisodeName(url) {
//   const result = await loadEpisodeData(url);
//   return result.episodes.name;
// }

// async function getDataCount(dataType) {
//   const result = await loadDataFromAPI();
//   return result[dataType].info.count;
// }


// async function displayCount() {
//   const charactersCount = await getDataCount("characters");
//   const episodesCount = await getDataCount("episodes");
//   const locationsCount = await getDataCount("locations");
//   personagens.innerHTML = charactersCount;
//   localizacoes.innerHTML = locationsCount;
//   episodios.innerHTML = episodesCount;
// }

// displayCount();

// // Carregar cards 
// async function loadCharacterCards(name, currentPage) {
//   const charactersData = await axios.get(
//     `${charactersURL}/?name=${name}&page=${currentPage}`
//   );
//   return charactersData.data.results;
// }

// let totalCards = 0;

// // Contruir card
// async function buildCard() {
//   console.log("currentPage ", currentPage);

//   const searchTerm = document.getElementById("buscador").value;
//   pages.innerHTML = currentPage;

//   const cards = await loadCharacterCards(searchTerm, currentPage);
//   container.innerHTML = "";

//   let index = 0;

//   totalCards = cards.length;

//   console.log("total de cards ", totalCards);
//   renderButtons();
//   for (const character of cards) {
//     index++;

//     const episodeName = await getEpisodeName(
//       character.episode[character.episode.length - 1]
//     );

//     container.innerHTML += `
//       <article class="card">
//         <img class="character-image" src="${character.image}" alt="Character image">
//         <div class="character-info">
//           <div>
//             <h2>${character.name}</h2>
//             <h3>${getStatus(character)} - ${character.species}</h3>
//           </div>
//           <div>
//             <p>Última localização conhecida:</p>
//             <h3> <strong>${character.location.name}</strong></h3>
//           </div>
//           <div>
//             <p>Visto a última vez em:</p>
//             <h3> <strong>${episodeName} </strong> </h3>
//           </div>
//         </div>
//       </article>`;

//     // Linha
//     if (index % 2 === 0 && index !== cards.length) {
//       container.innerHTML += `<div class="horizontal-line"></div>`;
//     }
//   }
// }

// // Clique
// document.getElementById("anterior").addEventListener("click", previousPage);
// document.getElementById("proxima").addEventListener("click", nextPage);

// buildCard();

// // Status
// function getStatus(character) {
//   if (character.status === "Alive") {
//     return `<h4 >🟢 Vivo`;
//   }
//   if (character.status === "Dead") {
//     return `<h4 >🔴 Morto`;
//   } else {
//     return `<h4 >❔ Desconhecido`;
//   }
// }

// // Paginação
// function renderButtons() {
//   if (currentPage < 2) {
//     document.getElementById("anterior").classList.add("hidden");
//   }
//   if (currentPage >= 2) {
//     document.getElementById("anterior").classList.remove("hidden");
//   }
//   if (totalCards < 20) {
//     document.getElementById("proxima").classList.add("hidden");
//   }
//   if (totalCards >= 20) {
//     document.getElementById("proxima").classList.remove("hidden");
//   }
// }

// function nextPage() {
//   if (totalCards > 19) {
//     currentPage++;
//     buildCard();
//   }
// }


// function previousPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     buildCard();
//   }
// }


// function search() {
//   currentPage = 1;
//   buildCard();
// }
