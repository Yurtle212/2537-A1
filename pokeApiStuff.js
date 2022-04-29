function getRequest(url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

function getRandomPokemon() {
    const pokemonAmount = 898;
    let res = getRequest("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * pokemonAmount));
    return res;
}

function getPokemonArtUrl(json) {
    return json["sprites"]["other"]["official-artwork"]["front_default"];
}

function getPokemonName(json) {
    return json["name"];
}

function getPokemonStats(json) {
    return json["stats"];
}

function validatePokemon(name) {
    let res = getRequest("https://pokeapi.co/api/v2/pokemon/" + name);
    return res == null ? false : true;
}