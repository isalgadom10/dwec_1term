// pedir colos hasta que lo adivine y se cambie el fondo
const backcolor = "blue";
let color = "";
do {
  color = prompt("guess de color: ");
} while (color !== backcolor);
document.body.style.backgroundColor = color;