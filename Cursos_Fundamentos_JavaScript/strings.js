// tipo de dato string

let string1 ='Hola Mundo';
let string2 ="Hola Mundo";
let string3 =`${string1} feliz :) `;
let string4 = string1 + ' ' + string2

console.log(string1);
console.log(string2);   
console.log(string3);
console.log(string4);

let frase = 'JavaScript es un lenguaje de programación. Me gusta JavaScript';
console.log(frase.length); // longitud de la cadena
console.log(frase.toLocaleLowerCase()); // convierte a minúsculas
console.log(frase.toLocaleUpperCase()); // convierte a mayúsculas
console.log(frase.substring(0,10)); // extrae una parte de la cadena