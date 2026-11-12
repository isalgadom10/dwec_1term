const crearTablero = () => {
    const tablero = [];
    
    for (let i = 0; i < 10; i++) {
        tablero[i] = [];
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = 0;
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

let tablero = crearTablero();
mostrarTablero(tablero);
console.log(`Hay ${contarCasillasOcupadas(tablero)} casillas ocupadas`);