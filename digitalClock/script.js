
let intervalId = null;

const clock = document.getElementById('displayReloj');
const startButton = document.getElementById("startClock");
const stopButton = document.getElementById("stopClock");
const resetButton = document.getElementById("resetClock");
//crear reloj
const reloj = () => {
    let hoy = new Date(); 
    let h = hoy.getHours(); 
    let m = hoy.getMinutes(); 
    let s = hoy.getSeconds();
    //actualizarse la hora
    m = actualizarHora(m);    
    s = actualizarHora(s);
    console.log(h + ":" + m + ":" + s);
    clock.innerHTML = h + ":" + m + ":" + s;
}
// hacer que tenga un 0 delante los menores de 10
const actualizarHora = (i) => {
    if (i < 10) {i = "0" + i};
    return i;
}
//iniciar el reloj
startButton.addEventListener("click", () => {
   if (intervalId === null) {
    intervalId = setInterval(reloj, 1000);
   }
});
// parar el reloj
stopButton.addEventListener("click", () => {
    if (intervalId !== null) {
        clearInterval(intervalId); 
        intervalId = null;
    }
});
// mostrar a 0
resetButton.addEventListener("click", () => {
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    clock.innerHTML = "00:00:00";
});