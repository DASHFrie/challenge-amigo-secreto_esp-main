// Voy a enumerar los requerimientos según la plantilla de Trello
// 1. Declarar variables array para el almacenamiento de nombres:
let amigos = [];

//2. Función para agregar amigos
function agregarAmigo(){
    //2a. Usar document.getElementById para capturar el valor de entrada
    const campoEntrada = document.getElementById("amigo");
    const nombreAmigo = campoEntrada.value;

    //3. Validar entrada
    if (nombreAmigo === "") {
        //Mostrar alert de error si se deja vacío
        alert("ESCRIBE UN NOMBREE!:(");
        return; //Debería detenerse si no hay nombre válido
    }

//4. Actualizar array - añadir arreglo usando .push()
amigos.push(nombreAmigo);
//5. Limpiar el campo de texto
campoEntrada.value = "";
        //Llamar a la función(más abajo) para actualizar la visualiz. de lista
mostrarAmigos();        
}
//6. Función para actualizar lista de amigos (recorrer array y elementos <li> (chino mandalin))
function mostrarAmigos() {
    //6a. Tomar elemento de lista usando doc.getElementById...
    const lista = document.getElementById("listaAmigos");
    //6b. Limpiar lista usando innerhtml para que no duplique
    lista.innerHTML = "";
    //6c. Usar bucle for para recorrer amigos, dudé en dejar esto arriba...
    for (let i = 0; i < amigos.length; i++) {
        //6d. Agregar nuevos Elm y crear nuevo Elm <li> para c/amigo
        const elementoLista = document.createElement("li");
        elementoLista.textContent = amigos[i]; // Asigna nombre del amigo > elemento
        lista.appendChild(elementoLista); // Añade el Elm <li> a la lista
    }
}
//7. Función para sortear los amigos usando math.random y floor
function sortearAmigo() {
    //7a. Validar amigos disponibles / comprobar que no esté vacío el array
    if (amigos.length === 0){
        alert("No hay amigos disponibles para sortear... :(");
        return; //detener si no hay amigos
    }
    //7b. math random y floor
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //7c. Obtener nombre random usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    //7d. Mostrar resultado con doc.getElmById e innerhtml
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong> 🐻juju</li>`;
}