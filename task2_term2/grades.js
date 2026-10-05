function calculateAvg() {
    let student = {
        name: document.getElementById("name").value,
        math: parseFloat(document.getElementById("math").value),
        language: parseFloat(document.getElementById("language").value),
        science: parseFloat(document.getElementById("science").value)
    };
    let promedio = 0;
    let contador = 0;
    let comprobar = true;

    for (const key in student) {
        if (key !== "name") {
            let value = student[key];
        
            if (value === " " || isNaN(value) || typeof value !== "number") {
                alert("Numero invalido");
                comprobar = false;
                break;
            } else {
                promedio += value;
                contador++;
                comprobar = true;
            }
        }
    }
    if (comprobar === true && promedio !== " " && contador > 0) {
        alert("Promedio: " + promedio/contador);
    }
}