// Funciones puras

// Side effects
// 1.Modificar variables globales
// 2.Modificar parámetros
// 3.Solicitudes HTTP
// 4.Imprimir mensajes en pantalla o consola
// 5.Manipular el DOM
// 6.Obtener la fecha y hora del sistema

function sum (a, b) {
return a + b;
}

function sum (a, b) {
    console.log('A: ', a);
return a + b;
}

let total = 0

function sumWithSideEffect (a) {
    total += a
}

function square(x) {
    return x * x;
}

function addTen (y) {
    return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult); // 35
