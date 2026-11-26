//coger los elementos del DOM necesarios
const mensaje = document.getElementById("mensaje");
const barcosColocados = document.getElementById("barcos-colocados");
const disparosRealizados = document.getElementById("disparos-realizados");
const nuevoJuego = document.getElementById("nuevo-juego");
const selectorBarco = document.getElementById("selector-barco");
const botonHorizontal = document.getElementById("horizontal");
const botonVertical = document.getElementById("vertical");

//variables de estado globales
let casillaSeleccionada = "";
let barcoSeleccionado = "";
let disparos = 0;
let colocados = 0;
let orientacion = "h";
let tabla = [];

// funciones
const crearBarcos = () => {
    const barcos = {
        carrier: {ship: "Carrier", length: 5, placed: false},
        battleship: {ship: "Battleship", length: 4, placed: false},
        destroyer: {ship: "Destroyer", length: 3, placed: false},
        submarine: {ship: "Submarine", length: 3, placed: false},
        patrolBoat: {ship: "Patrol Boat", length: 2, placed: false}
    };

    selectorBarco.addEventListener("change", () => {
        const valorBarco = selectorBarco.value;
        const barco = barcos[valorBarco];
        
        if (!barco) {
            barcoSeleccionado = "";
            mensaje.textContent = "Select a valid ship";
            return;
        } else if (barco.placed) {
            barcoSeleccionado = "";
            mensaje.textContent = `${barco.ship} has already been selected`;
            return;
        }
        
        barcoSeleccionado = barco;
        mensaje.textContent = `You have selected ${barco.ship}`;
    });
};

const colocarBarco = (longitud, row, column, orientation) => {
    let casillasOcuapadas = [];
    
    const filaInicial = parseInt(row);
    const columnaInicial = parseInt(column);

    for (let i = 0; i < longitud; i++) {
        let fila = orientation === "v" ? filaInicial + i : filaInicial;
        let columna = orientation === "h" ? columnaInicial + i : columnaInicial;

        if (fila < 0 || fila >= 10 || columna < 0 || columna >= 10) {
            mensaje.textContent = "The ship cannot be placed, it extends beyond the board";
            return [];
        } else if (tabla[fila][columna] === 1) {
            mensaje.textContent = "Cannot overlap ships! Choose another position";
            return [];
        } else {
            casillasOcuapadas.push({row: fila, col: columna});
        }
    }
    return casillasOcuapadas;
};

const crearTablero = (idTablero) => {
    const tablero = document.getElementById(idTablero);
    for (let i = 0; i < 10; i++) {
        const fila = [];
        for (let j = 0; j < 10; j++) {
            fila.push(0);
            const casillaUnica = document.createElement("div");
            casillaUnica.classList.add("casilla");
            casillaUnica.id = `${idTablero}-${i}-${j}`;
            casillaUnica.setAttribute("data-row", i);
            casillaUnica.setAttribute("data-column", j);
            tablero.appendChild(casillaUnica);
            
            casillaUnica.addEventListener('click', () => {
                if (idTablero !== "tablero-jugador") return;
                
                if (!barcoSeleccionado) {
                    mensaje.textContent = "You must select a ship first";
                    return;
                }

                casillaSeleccionada = casillaUnica;

                const posiciones = colocarBarco(idTablero, barcoSeleccionado.length, casillaSeleccionada.getAttribute("data-row"), casillaSeleccionada.getAttribute("data-column"), orientacion);

                if (posiciones.length > 0) {
                    posiciones.forEach( pos => {
                        tabla[pos.row][pos.col] = 1;
                        const celda = document.getElementById(`${idTablero}-${pos.row}-${pos.col}`);
                        celda.classList.add("seleccionada");
                    });
                    
                    const opcionSelecionada = selectorBarco.querySelector(`option[value="${selectorBarco.value}"]`);
                    if (opcionSelecionada) {
                        opcionSelecionada.disabled = true;
                    }
                    
                    barcoSeleccionado.placed = true;
                    barcoSeleccionado = "";
                    selectorBarco.value = "";
                    colocados++;
                    actualizarInformacion();
                    mensaje.textContent = "Ship placed!";
                }
            });            
        }
        tabla.push(fila);
    }
    return tablero;
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
    mostrarMensaje("Orientation horizontal");
    orientacion = "h";
});

botonVertical.addEventListener("click", () => {
    botonVertical.classList.add("activo");
    botonHorizontal.classList.remove("activo");
    mostrarMensaje("Orientation vertical");
    orientacion = "v";
});

crearBarcos();