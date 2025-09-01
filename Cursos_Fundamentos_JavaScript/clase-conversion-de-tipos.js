// Explicit Type casting

const string = '42';
const integer = parseInt(string); // Convierte string a número
console.log(integer); // 42
console.log(typeof integer); // "number"

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal); // Convierte string a número decimal
console.log(float); 
console.log(typeof float); 

const binary = '1010';
const decimal = parseInt(binary, 2); // Convierte string binario a número decimal
console.log(decimal); 
console.log(typeof decimal); 

// implicit type casting

const sum = 5 + 3; // El número 3 se convierte a string y se concatena
console.log(sum); // 

const sumWithBoolean = '3' + true; 
console.log(sumWithBoolean); 

const sumWithBNumber = 2 + true; 
console.log(sumWithBNumber); 

const stringValue = '10';
const numberValue = 5;
const booleanValue = true;
console.log('-----------------')
console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);