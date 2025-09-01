// 1. Tipo entero y decimal
const entero = 42; // Número entero
const decimal = 3.14; // Número decimal
console.log(typeof entero, typeof decimal); // "number"

// 2. Notacion científica
const cientifico = 5e3; // 5 * 10^3 = 5000

//3. infinitos y NaN

const noEsUnNumero = NaN; // Representa un valor que no es un número

// Operaciones aritmeticas

// 1. Suma,resta,multiplicacion,division
const suma = 10 + 5; // 15
const resta = 10 - 5; // 5  
const multiplicacion = 10 * 5; // 50
const division = 10 / 5; // 2

// 2. Modulo y Exponente
const modulo = 10 % 3; // 1
const exponente = 2 ** 3; // 8

// presicion

const resultado = 0.1 + 0.2; // 0.30000000000000004
console.log(resultado)
console.log(resultado.toFixed(1)); // "0.30"
console.log(resultado === 0.3); // false

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16); // 4
const valorAbsoluto = Math.abs(-10); // 10
const aleatorio = Math.random(); // Número aleatorio entre 0 y 1
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio.toFixed(2));