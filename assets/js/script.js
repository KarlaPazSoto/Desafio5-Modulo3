let tareas = [
    { id: 1, nombre: "ir supermercado", realizada: false },
    { id: 2, nombre: "ir pan", realizada: false },
    { id: 3, nombre: "ir feria", realizada: false }
];

let botonAgregar = document.querySelector('#agregar');
let inputTarea = document.querySelector('#ingresar');
let tareaIngresada = document.querySelector('#tareaIngresada');
let contadorTotal = tareas.length;
let contadorFormateado = "Total: " + contadorTotal;
let contadorRealizadas = tareas.filter(tarea => tarea.realizada).length;

botonAgregar.addEventListener('click', () => {
    if (inputTarea.value.trim() !== "") {
        let nuevaTarea = { id: Date.now(), nombre: inputTarea.value, realizada: false };
        tareas.push(nuevaTarea);
        inputTarea.value = "";
        contadorTotal++;
        contadorFormateado = "Total: " + contadorTotal;
        actTotal();
        actTareas();
    }
});

function actTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `<li>${tarea.id} ${tarea.nombre} <input type="checkbox" ${tarea.realizada ? 'checked' : ''} onchange="actRealizadas(this, ${tarea.id})"> <button onclick="borrar(${tarea.id})">x</button></li>`;
    }
    tareaIngresada.innerHTML = html;
}

function borrar(id) {
    const index = tareas.findIndex((elemento) => elemento.id == id);
    if (index !== -1) {
        if (tareas[index].realizada) {
            contadorRealizadas--;
        }
        tareas.splice(index, 1);
        contadorTotal--;
        contadorFormateado = "Total: " + contadorTotal;
        actTotal();
        actTareas();
        actResueltas();
    }
}

function actTotal() {
    document.getElementById('total').textContent = contadorFormateado;
}

function actRealizadas(checkbox, id) {
    const tarea = tareas.find((elemento) => elemento.id == id);
    if (checkbox.checked) {
        tarea.realizada = true;
        contadorRealizadas++;
    } else {
        tarea.realizada = false;
        contadorRealizadas--;
    }
    actResueltas();
}

function actResueltas() {
    document.getElementById('realizadas').textContent = "Resueltas: " + contadorRealizadas;
}

actTotal();
actTareas();
actResueltas();
