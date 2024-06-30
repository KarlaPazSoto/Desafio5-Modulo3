let tareas = [
]

let botonAgregar = document.querySelector('#agregar');
let inputTarea = document.querySelector('#ingresar')
let tareaIngresada = document.querySelector('#tareaIngresada')

botonAgregar.addEventListener('click', () => {
    let nuevaTarea = {id: Date.now(), nombre: inputTarea.value};
    tareas.push(nuevaTarea);
    inputTarea.value = "";

    actTareas();
})

function actTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `<li>${tarea.id} ${tarea.nombre} <input type="checkbox"> <button onclick="borrar(${tareas.id})">x</button> </li>`
    }
    tareaIngresada.innerHTML = html;
}

function borrar(id) {
    const index = tareas.findIndex((elemento) => elemento.id == id);
    tareas.splice(index, 1);
    actTareas();
}

actTareas();

