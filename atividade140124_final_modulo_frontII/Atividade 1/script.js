// API
const charactersURL = "https://rickandmortyapi.com/api/character";
const episodesURL = "https://rickandmortyapi.com/api/episode";
const locationsURL = "https://rickandmortyapi.com/api/location";

// Paginação
let currentPage = 1;

// Dados
async function loadDataFromAPI() {
  const charactersData = await axios.get(`${charactersURL}`);
  const episodesData = await axios.get(`${episodesURL}`);
  const locationsData = await axios.get(`${locationsURL}`);
  return {
    characters: charactersData.data,
    episodes: episodesData.data,
    locations: locationsData.data,
  };
}

// Episódio
async function loadEpisodeData(url) {
  const episodesData = await axios.get(url);
  return {
    episodes: episodesData.data,
  };
}

// Nome do episódio
async function getEpisodeName(url) {
  const result = await loadEpisodeData(url);
  return result.episodes.name;
}

async function getDataCount(dataType) {
  const result = await loadDataFromAPI();
  return result[dataType].info.count;
}


async function displayCount() {
  const charactersCount = await getDataCount("characters");
  const episodesCount = await getDataCount("episodes");
  const locationsCount = await getDataCount("locations");
  personagens.innerHTML = charactersCount;
  localizacoes.innerHTML = locationsCount;
  episodios.innerHTML = episodesCount;
}

displayCount();

// Carregar cards 
async function loadCharacterCards(name, currentPage) {
  const charactersData = await axios.get(
    `${charactersURL}/?name=${name}&page=${currentPage}`
  );
  return charactersData.data.results;
}

let totalCards = 0;

// Contruir card
async function buildCard() {
  console.log("currentPage ", currentPage);

  const searchTerm = document.getElementById("buscador").value;
  pages.innerHTML = currentPage;

  const cards = await loadCharacterCards(searchTerm, currentPage);
  container.innerHTML = "";

  let index = 0;

  totalCards = cards.length;

  console.log("total de cards ", totalCards);
  renderButtons();
  for (const character of cards) {
    index++;

    const episodeName = await getEpisodeName(
      character.episode[character.episode.length - 1]
    );

    container.innerHTML += `
      <article class="card">
        <img class="character-image" src="${character.image}" alt="Character image">
        <div class="character-info">
          <div>
            <h2>${character.name}</h2>
            <h3>${getStatus(character)} - ${character.species}</h3>
          </div>
          <div>
            <p>Última localização conhecida:</p>
            <h3> <strong>${character.location.name}</strong></h3>
          </div>
          <div>
            <p>Visto a última vez em:</p>
            <h3> <strong>${episodeName} </strong> </h3>
          </div>
        </div>
      </article>`;

    // Linha
    if (index % 2 === 0 && index !== cards.length) {
      container.innerHTML += `<div class="horizontal-line"></div>`;
    }
  }
}

// Clique
document.getElementById("anterior").addEventListener("click", previousPage);
document.getElementById("proxima").addEventListener("click", nextPage);

buildCard();

// Status
function getStatus(character) {
  if (character.status === "Alive") {
    return `<h4 >🟢 Vivo`;
  }
  if (character.status === "Dead") {
    return `<h4 >🔴 Morto`;
  } else {
    return `<h4 >❔ Desconhecido`;
  }
}

// Paginação
function renderButtons() {
  if (currentPage < 2) {
    document.getElementById("anterior").classList.add("hidden");
  }
  if (currentPage >= 2) {
    document.getElementById("anterior").classList.remove("hidden");
  }
  if (totalCards < 20) {
    document.getElementById("proxima").classList.add("hidden");
  }
  if (totalCards >= 20) {
    document.getElementById("proxima").classList.remove("hidden");
  }
}

function nextPage() {
  if (totalCards > 19) {
    currentPage++;
    buildCard();
  }
}


function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    buildCard();
  }
}


function search() {
  currentPage = 1;
  buildCard();
}
