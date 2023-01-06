const pokemonname = document.querySelector('.pokemon__name');
const pokemonnumber = document.querySelector('.pokemon__number');
const pokemonimage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonprev = document.querySelector('.bth-prev');
const buttonnext = document.querySelector('.btn-next');

let searchpokemon = 1;

const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
        if (APIResponse.status = 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon =  async (pokemon) => {

    pokemonname.innerHTML = 'Carregando ...';
    pokemonnumber.innerHTML = '';

    const data = await fetchpokemon(pokemon);

    if (data) {
    pokemonname.innerHTML = data.name;
    pokemonnumber.innerHTML = data.id;
    pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']
    ['animated']['front_default'];
    input.value = '';
    searchpokemon = data.id;
    } 
    
    else {
        pokemonname.innerHTML = 'Not found :c';
        pokemonnumber.innerHTML = '';
    }
}
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
});

buttonprev.addEventListener('click', () => {
    if(searchpokemon > 1){
    searchpokemon -= 1;
    renderPokemon(searchpokemon);
    }
});

buttonnext.addEventListener('click', () => {
    searchpokemon += 1;
    renderPokemon(searchpokemon);
 });

renderPokemon('1');