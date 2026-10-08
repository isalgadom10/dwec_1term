const students = [];

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
    let promedioAlumnos = promedio/contador;
    if (comprobar === true && promedio !== " " && contador > 0) {
        alert("Promedio: " + promedioAlumnos);
        console.log(student);
    }
}

function addstudent() {
    let numberStudents = parseInt(document.getElementById("students").value);
    let student = {
        name: document.getElementById("name").value,
        math: parseFloat(document.getElementById("math").value),
        language: parseFloat(document.getElementById("language").value),
        science: parseFloat(document.getElementById("science").value)
    };
    // comprobar que los datos introducidos son válidos
    

 
    // si no me he pasado de numero de alumnos entonces meto el objeto en el array   
    if (students.length < numberStudents) {
        students.push(student);
    } else {
        alert("ya no se pueden agregar más alumnos");
    }
    console.log(students);
}