// Subir este código a un Repositorio de su propia Autoria.
// Grabar un video educativo donde 
    //   Se explica linea por linea.
    //   Se usa el Debugger como herramienta principal.
// Compartir el video por un link (Youtube, Drive, etc).








// Explicar cual es esta estructura de datos y como se comporta.
let mapa = new Map();

mapa.set("clave", "valor");

console.log(mapa.get("clave")); // imprime: "valor"

// Explicar, como se puede recorrer un Hash Map, paso a paso.
mapa.set("clave1", "valor1");
mapa.set("clave2", "valor2");

mapa.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});


// Explicar el siguiente ejemplo:
let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 9, 7, 7,8, 9];
let duplicados = contarDuplicados(arr);

// Imprimir los números duplicados y su cantidad
for (let [num, count] of duplicados) {
    console.log(`Número: ${num}, Cantidad: ${count}`);
}

// Explicar paso a paso.
function contarDuplicados(arr) {
    // Crear un Map vacío
    let mapa = new Map();

    // Recorrer el array
    for (let i = 0; i < arr.length; i++) {
        // Si el número ya está en el Map, incrementar su contador
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);
        }
        // Si el número no está en el Map, agregarlo con un contador de 1
        else {
            mapa.set(arr[i], 1);
        }
    }

    // Crear un nuevo Map para guardar sólo los números duplicados
    let duplicados = new Map();

    // Recorrer el Map original
    for (let [num, count] of mapa) {
        // Si el contador es mayor a 1, el número está duplicado
        if (count > 1) {
            duplicados.set(num, count);
        }
    }

    return duplicados;
}

/*
let arr = ["usuario1", "usuario2", "usuario3", "usuario1", "usuario2", "usuario3", "usuario4", "usuario5", "usuario6", "usuario4", "usuario5", "usuario6", "usuario7", "usuario8", "usuario9", "usuario7", "usuario7", "usuario8", "usuario9"];
let duplicados = contarDuplicados(arr);

console.log("Usuarios duplicados:");
for (let [usuario, count] of duplicados) {
    console.log(`Usuario: ${usuario}, Cantidad: ${count}`);
}

let usuariosSinDuplicados = eliminarDuplicados(arr);

console.log("Usuarios sin duplicados:");
console.log(usuariosSinDuplicados);

function contarDuplicados(arr) {
    let mapa = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);
        } else {
            mapa.set(arr[i], 1);
        }
    }

    let duplicados = new Map();

    for (let [usuario, count] of mapa) {
        if (count > 1) {
            duplicados.set(usuario, count);
        }
    }

    return duplicados;
}

function eliminarDuplicados(arr) {
    let mapa = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);
        } else {
            mapa.set(arr[i], 1);
        }
    }

    let usuariosSinDuplicados = [];

    for (let [usuario, count] of mapa) {
        if (count <= 2) {
            usuariosSinDuplicados.push(usuario);
        }
    }

    return usuariosSinDuplicados;
}
*/