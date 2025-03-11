// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almancenar nombre de amigos
let amigos = [];

// Funcion para agregar amigos

function agregarAmigo() {
    // Toma el valor del campo
    const inputNombre = document.querySelector('input#amigo');
    const nombre = inputNombre.value.trim();
    
    // Validamos la entrada
    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar array
    amigos.push(nombre);

    // Limpiar campo
    inputNombre.value = "";

    console.log("Lista de amigos:", amigos);


    actualizarListaAmigos();
}


function actualizarListaAmigos() {
    // Obtener elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar lista
    listaAmigos.innerHTML = "";

    // Iterar sobre el arrego
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;

        listaAmigos.appendChild(li);
    });
}


// Funcion para sortear

function sortearAmigo() {
    // Validar que hay amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista, por favor añadir algunos");
        return;
    }

    // Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoSorteo = document.getElementById('resultado');
    resultadoSorteo.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}