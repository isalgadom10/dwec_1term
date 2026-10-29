// Write your JavaScript code here.
const students = [
    { name: "Anna Garcia", grade: 8.5 },
    { name: "John Martin", grade: 4.5 },
    { name: "Mary Lopez", grade: 7 },
    { name: "Peter Smith", grade: 3 },
    { name: "Lucy Brown", grade: 9 }
];

// referencias a los elementos
const container = document.getElementById("listaNotas");
const mostrarTodo = document.getElementById("btnTodas");
const aprobados = document.getElementById("btnAprobados");
const media = document.getElementById("btnMedia");
const nombresUpper = document.getElementById("btnNombres");

//funciones
// mostrar alumnos
const displayStudents = (estudiantes) => {
    container.innerHTML = ``;
    estudiantes.forEach(estudiante => {
            container.innerHTML += `
            <p>Name: ${estudiante.name}</p>
            <p>Grade: ${estudiante.grade}</p>
            `;
    });
}
//calcular la media
const calculateAverage = (alumnos) => {
    let media = 0;
    let contador = 0;
    container.innerHTML = ``;
    alumnos.forEach(nota => {
        media += nota.grade;
        contador++;
    });
    let resultado = (media / contador).toFixed(2);
    
    container.innerHTML = `
        <h4>The average of all students is: ${resultado}</h4>
    `;
}

//cambiar los nombres a mayúsculas
const namesUppercase = () => {
    container.innerHTML = ``;
    const upperNames = students.map(nombre => nombre.name.toUpperCase());
    upperNames.forEach(nombres => {
        container.innerHTML += `
        <p>Name: ${nombres}</p>
        `;
    });
}

//llamadas a las referencias
// mostrar todos
mostrarTodo.addEventListener("click", () => displayStudents(students));
//filtrar por los aprobados
aprobados.addEventListener("click", () => {
    const estudiantesAprobados = students.filter(student => student.grade >= 5);
    displayStudents(estudiantesAprobados);
});
//calcular la media
media.addEventListener("click", () => calculateAverage(students));
//mostrar los nombres en mayuscula
nombresUpper.addEventListener("click", () => namesUppercase());