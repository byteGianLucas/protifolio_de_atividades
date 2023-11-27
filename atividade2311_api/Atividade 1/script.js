function ex1(data) {
    console.log(1, data);
}

function ex2(data) {
    const planets = data.filter(body => body.isPlanet);
    console.log(2, planets)

    return planets;
}

function ex3(data) {
    const earth = data.find(body => body.englishName === 'Earth');
    console.log(3, earth);    
}

function ex4(data) {
    const noMoon = data.some(body => body.moons === null);
    console.log(4, noMoon);
}

function ex5(data) {
    const names = data.map(body => body.name);
    console.log(5, names);
}

function ex6(data) {
    const sorted = data.sort((a, b) => b.meanRadius - a.meanRadius)
        .map(planet => planet.name);
    console.log(6, sorted);
}

function ex7(data) {
    const concat = data.sort((a, b) => a.perihelion - b.perihelion)
        .map(planet => planet.name)
        .join(', ');

    console.log(7, concat);
}

function ex8(data) {
    const concat = data
        .sort((a, b) => a.meanRadius - b.meanRadius)
        .slice(0, 5)
        .reduce((total, planet) => total + planet.mass.massValue,0);
    
    console.log(8, concat);
}

function ex9(data) {
    const planets = data
        .filter(planet => planet.moons != null && planet.moons.length >= 2 && planet.density > 1);
    
    console.log(9, planets);
}

function ex10(data) {
    const planets = data
        .filter(body => body.date && planet.moons.length >= 2 && planet.density > 1);
    
    console.log(10, planets);
}


axios.get('https://api.le-systeme-solaire.net/rest/bodies/').then((result) => {
    const data = result.data.bodies;

    // 1. Consuma a API:
    ex1(data);

    // 2. Filtre os Planetas:
    const filteredPlanets = ex2(data);

    // 3. Encontre a Terra:
    ex3(filteredPlanets);

    // 4. PLanetas sem lua:
    ex4(filteredPlanets);
    
    // 5. Transforme os Dados com map:
    ex5(filteredPlanets);
    
    // 6. Classificação por Tamanho:
    ex6(filteredPlanets);

    // 7. Informações Concatenadas
    ex7(filteredPlanets);
    
    // 8. Sistema Solar Compacto
    ex8(filteredPlanets);

    // 9. Luas e Desidade
    ex9(filteredPlanets);
    
    // 10. Ordem de descobrimento
    ex10(data);
});