let siguienteURL = "";

// Obtenemos los datos de todos los pokemon 
// Fetch the data of all Pokémon from the AP
function cargarAPI(url){
fetch(url)
    .then(response => {
        // Check if the HTTP response is OK (status in the range 200-299)
        if (!response.ok) {
            // If the response is not OK, throw an error to be caught later
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the response is OK, parse the response body as JSON
        return response.json();
    })
    .then(json => {
        // Once the JSON is parsed, call the function to process and display Pokémon
        //siguienteURL = json.next;
        //printPokemons(json.results);
        buscarPkm(json.results);
    })
    .catch(error => {
        // This block handles any errors:
        // 1. Network errors (e.g., no internet connection)
        // 2. HTTP errors thrown manually above
        console.error(error); // Log the error details in the console for debugging
        alert("Unable to load Pokémon data."); // Show a user-friendly message
    });

}

function buscarPkm() {
    const container = document.getElementById('container');
    const buscador = document.getElementById('search-input');
    const text = buscador.value.toLowerCase().trim();

    container.innerHTML = "";

    let miurl=`https://pokeapi.co/api/v2/pokemon/${text}`;
    fetch(miurl)
    .then(response => {
        // Check if the HTTP response is OK (status in the range 200-299)
        if (!response.ok) {
            // If the response is not OK, throw an error to be caught later
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the response is OK, parse the response body as JSON
        return response.json();
    })
    .then(json => {
        // Once the JSON is parsed, display Pokémon
        let pokemon=json;     
        container.innerHTML += `
            <div class="card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
                <span>Nº.${pokemon.id}</span>
                <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <h5>Peso: ${json.height}</h5>
                <h5> Altura: ${json.weight}</h5>
            </card>
            `;
    })
    .catch(error => {
        // This block handles any errors:
        // 1. Network errors (e.g., no internet connection)
        // 2. HTTP errors thrown manually above
        console.error(error); // Log the error details in the console for debugging
        alert("Unable to load Pokémon data."); // Show a user-friendly message
    });      
}