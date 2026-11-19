//coger los elementos del DOM necesarios
const mensaje = document.getElementById("mensaje");
const barcosColocados = document.getElementById("barcos-colocados");
const disparosRealizados = document.getElementById("disparos-realizados");
const nuevoJuego = document.getElementById("nuevo-juego");
const selectorBarco = document.getElementById("selector-barco");
const botonHorizontal = document.getElementById("horizontal");
const botonVertical = document.getElementById("vertical");

//saber que casilla esta seleccionada
let casillaSeleccionada = null;

//variables como contadores
const disparos = 0;
const colocados = 0;

// funciones
const crearTablero = (idTablero) => {
    const tablero = document.getElementById(idTablero);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const casillaUnica = document.createElement("div");
            casillaUnica.classList.add("casilla");
            casillaUnica.id = `${idTablero}-${i}-${j}`;
            tablero.appendChild(casillaUnica);
            
            casillaUnica.addEventListener('click', () => {
                casillaUnica.classList.toggle("seleccionada");
                mensaje.textContent = `You selected row ${i+1}, column ${j+1} in the ${idTablero} board.`;
                
                /*if (casillaSeleccionada) {
                  casillaSeleccionada.classList.remove('seleccionada');
                }
                casillaUnica.classList.add('seleccionada');
                casillaSeleccionada = casillaUnica;
                mensaje.textContent = `You selected row ${i+1}, column ${j+1} in the ${idTablero} board.`;
                */
            });            
        }
    }
    return tablero;
}

const crearBarcos = () => {
    const barcos = {
        carrier: {ship: "Carrier", length: 5, placed: false},
        battleship: {ship: "Battleship", length: 4, placed: false},
        destroyer: {ship: "Destroyer", length: 3, placed: false},
        submarine: {ship: "Submarine", length: 3, placed: false},
        patrolBoat: {ship: "Patrol Boat", length: 2, placed: false}
    };

    let barcoSeleccionado = "";
    let lengthShip = 0;

    selectorBarco.addEventListener("change", () => {
        barcoSeleccionado = selectorBarco.value;
        const barco = barcos[barcoSeleccionado];
        
        if (!barcoSeleccionado) return;

        console.log(barcos);
        /*if (barcos[barcoSeleccionado].placed) {
            
        }*/
    });
}

const mostrarTablero = (tab) => {
    let fila = "";
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            fila += tab[i][j] + " ";
        }
        fila += "\n";
    }
    console.log(fila);
}

const contarCasillasOcupadas = (tablero) => {
    let ocupadas = 0;
    
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === 1) {
                ocupadas++;
            }            
        }
    }
    return ocupadas;
}

const mostrarMensaje = (texto) => {
    mensaje.textContent = texto;
}

const actualizarInformacion = () => {
    disparosRealizados.textContent = disparos;
    barcosColocados.textContent = colocados;
}

//lamar a las funciones para crear los tableros
crearTablero("tablero-jugador");
crearTablero("tablero-enemigo");

//añadir eventos en los botones
botonHorizontal.addEventListener("click", () => {
    botonHorizontal.classList.add("activo");
    botonVertical.classList.remove("activo");
    mostrarMensaje("Orientación horizontal");
});

botonVertical.addEventListener("click", () => {
    botonVertical.classList.add("activo");
    botonHorizontal.classList.remove("activo");
    mostrarMensaje("Orientación vertical");
});
