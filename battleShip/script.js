const mensaje = document.getElementById("mensaje");
const barcosColocados = document.getElementById("barcos-colocados");
const disparosRealizados = document.getElementById("disparos-realizados");
const nuevoJuego = document.getElementById("nuevo-juego");
const selectorBarco = document.getElementById("selector-barco");

const botonHorizontal = document.getElementById("horizontal");
const botonVertical = document.getElementById("vertical");

const casillas = document.querySelectorAll(".casilla");

let casillaSeleccionada = null;

const disparos = 0;
const colocados = 0;


const crearTablero = (idTablero) => {
    const tablero = document.getElementById(idTablero);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const casillaUnica = document.createElement("div");
            casillaUnica.classList.add("casilla");
            casillaUnica.id = `${tablero}-${i}-${j}`;
            tablero.appendChild(casillaUnica);
            //casillaUnica.addEventListener("click", () => {
                if (casillaSeleccionada !== null) {
                    casillaSeleccionada.classList.remove("seleccionada");
                }
                casilla.classList.add("seleccionada");
                casillaSeleccionada = casilla;
        
                const fila = casilla.dataset.row;
                const columna = casilla.dataset.col;
        
                mostrarMensaje(`You selected row ${fila}, column ${columna}`);
            });
        }
    }
    return tablero;
}

const crearBarcos = () => {
    const barcos = [
        {ship: "Carrier", length: 5},
        {ship: "Battleship", length: 4},
        {ship: "Destroyer", length: 3},
        {ship: "Submarine", length: 3},
        {ship: "Patrol Boat", length: 2}
    ];
    return barcos;
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


crearTablero("tablero-jugador");
crearTablero("tablero-enemigo");

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

