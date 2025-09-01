// map()

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// forEach()

const colors = ['red', 'green', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));
console.log(colors);
console.log(iteratedColors); // undefined

//Exercise: Fahrenheit to Celsius

const temperaturesInFahrenheit = [32, 68, 95, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32));
console.log('Temperaturas en Fahrenheit', temperaturesInFahrenheit);
console.log('Temperaturas en Celsius', temperaturesInCelsius);

//sum elements in an array

const Newnumbers = [1, 2, 3, 4, 5];

let sum = 0;
Newnumbers.forEach(number => {
    sum += number;
});

console.log('array numbers', Newnumbers);
console.log('sum of all elements', sum);
