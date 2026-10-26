// Write your JavaScript code here.
const students = [
    { name: "Anna Garcia", grade: 8.5 },
    { name: "John Martin", grade: 4.5 },
    { name: "Mary Lopez", grade: 7 },
    { name: "Peter Smith", grade: 3 },
    { name: "Lucy Brown", grade: 9 }
];

const container = document.getElementById("listaNotas").addEventListener("click", () => students);
const mostrarTodo = document.getElementById("btnTodas");
const aprobados = document.getElementById("btnAprobados");
const media = document.getElementById("btnMedia");
const nombresUpper = document.getElementById("btnNombres");


const displayStudents = (listaAlumnos) => {
    container.innerHTML = ``;
    listaAlumnos.forEach(estudiantes => {
            container.innerHTML += `
            <p>Name: ${estudiantes.name}</p>
            <p>Grade: ${estudiantes.grade}</p>
            `;
    });
}
//llamada al boton para mostrar todos los estudiantes


//aprobados.addEventListener("click", displayStudents);