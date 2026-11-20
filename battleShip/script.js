//coger los elementos del DOM necesarios
const mensaje = document.getElementById("mensaje");
const barcosColocados = document.getElementById("barcos-colocados");
const disparosRealizados = document.getElementById("disparos-realizados");
const nuevoJuego = document.getElementById("nuevo-juego");
const selectorBarco = document.getElementById("selector-barco");
const botonHorizontal = document.getElementById("horizontal");
const botonVertical = document.getElementById("vertical");

//saber que casilla esta seleccionada
let casillaSeleccionada = "";

//variables como contadores
const disparos = 0;
const colocados = 0;

//guardar la orientacion del barco
let orientacion = "h";

// funciones
const crearTablero = (idTablero) => {
    const tablero = document.getElementById(idTablero);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const casillaUnica = document.createElement("div");
            casillaUnica.classList.add("casilla");
            casillaUnica.id = `${idTablero}-${i}-${j}`;
            casillaUnica.setAttribute("data-row", i);
            casillaUnica.setAttribute("data-column", j);
            tablero.appendChild(casillaUnica);
            
            casillaUnica.addEventListener('click', () => {
                casillaUnica.classList.toggle("seleccionada");
                mensaje.textContent = `You selected row ${i+1}, column ${j+1} in the ${idTablero} board.`;
                casillaSeleccionada = casillaUnica;
            });            
        }
    }
    return tablero;
};

const colocarBarco = (longitud, row, column, orientation) => {
    let casillasOcuapadas = [];

    const filaInicial = parseInt(row);
    const columnaInicial = parseInt(column);

    for (let i = 0; i < longitud; i++) {
        let fila = filaInicial;
        let columna = columnaInicial;

        if (orientation === "h") {
            columna = columnaInicial + i;
        } else if (orientation === "v") {
            fila = filaInicial + i;
        }

        if (fila < 0 || fila >= 10 || columna < 0 || columna >= 10) {
            casillasOcuapadas = [];
            mensaje.textContent = "No se puede colocar el barco, se desborda del tablero";
        } else {
            casillasOcuapadas.push({row: fila, col: columna});
        }
    }
    return casillasOcuapadas;
};

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
        const valorBarco = selectorBarco.value;
        const barco = barcos[valorBarco];
        
        
        if (!barco) {
            barcoSeleccionado = "";
            lengthShip = 0;
            mensaje.textContent = "Selecciona un barco válido";
            return;
        } else if (barco.placed) {
            barcoSeleccionado = "";
            lengthShip = 0;
            mensaje.textContent = `El ${barco.ship} ya ha sido colocado`;
            return;
        }
        if (!casillaSeleccionada) {
            mensaje.textContent = "Debes selecionar una casilla";
            barcoSeleccionado = "";
            return;
        }

        barcoSeleccionado = barco;
        lengthShip = barco.length;
        const posiciones = colocarBarco(barcoSeleccionado.length, casillaSeleccionada.getAttribute("data-row"), casillaSeleccionada.getAttribute("data-column"), orientacion);
        console.log("casillas calculadas: ", posiciones);
        mensaje.textContent = `Has selecionado ${barco.ship}`;
    });
};

const mostrarTablero = (tab) => {
    let fila = "";
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            fila += tab[i][j] + " ";
        }
        fila += "\n";
    }
    console.log(fila);
};

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
};

const mostrarMensaje = (texto) => {
    mensaje.textContent = texto;
};

const actualizarInformacion = () => {
    disparosRealizados.textContent = disparos;
    barcosColocados.textContent = colocados;
};

//lamar a las funciones para crear los tableros
crearTablero("tablero-jugador");
crearTablero("tablero-enemigo");

//añadir eventos en los botones
botonHorizontal.addEventListener("click", () => {
    botonHorizontal.classList.add("activo");
    botonVertical.classList.remove("activo");
    mostrarMensaje("Orientación horizontal");
    orientacion = "h";
});

botonVertical.addEventListener("click", () => {
    botonVertical.classList.add("activo");
    botonHorizontal.classList.remove("activo");
    mostrarMensaje("Orientación vertical");
    orientacion = "v";
});

crearBarcos();