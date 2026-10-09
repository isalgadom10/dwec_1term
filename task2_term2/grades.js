const students = [];
let numberStudents;


function calculateAvg() {

 if(numberStudents===students.length){
    let student = {
        name: document.getElementById("name").value,
        math: parseFloat(document.getElementById("math").value),
        language: parseFloat(document.getElementById("language").value),
        science: parseFloat(document.getElementById("science").value)
    };
   

    //si hemos llegado al total de alumnos introducidos
    let promedio = 0;
    let contador = 0;
    //let comprobar = true;
    let suma_promedios = 0;
    for ( student of students) {
        for (const key in student) {
            if (key !== "name") {
                let value = student[key];
                    promedio += value;
                    contador++;
            }
        }
    }
    let promedioAlumnos = promedio/contador;
    alert("Promedio: " + promedioAlumnos);
    } else {
    alert("You must enter all the students");
    } 
}

function addstudent() {
    let comprobar = true;
    //la primera vez inicializo el valor
    if (numberStudents===undefined)
                numberStudents= parseInt(document.getElementById("students").value);

    let student = {
        name: document.getElementById("name").value,
        math: parseFloat(document.getElementById("math").value),
        language: parseFloat(document.getElementById("language").value),
        science: parseFloat(document.getElementById("science").value)
    };
    // comprobar que los datos introducidos son válidos
    for (const key in student) {
        if (key !== "name") {
            let value = student[key];
        
            if (value === " " || isNaN(value) || typeof value !== "number") {
                alert("Numero invalido");
                comprobar = false;
                break;
            }
        }
    }
 
    // si no me he pasado de numero de alumnos entonces meto el objeto en el array   
    if (comprobar === true) {
        if (students.length < numberStudents) {
            students.push(student);
        } else {
            alert("ya no se pueden agregar más alumnos");
        }
    } else {
        alert("No se puede añadir el alumno");
    }
}