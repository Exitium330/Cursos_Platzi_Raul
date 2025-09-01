// How to create an array

// 1. new array() or array ()

const fruits = Array("apple", "banana", "cherry"); 
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber);

const Number = Array(1,2,3,4,5,6,7,8,9,10)
console.log(Number);

//2. Array literal syntax[] 

const oneNumber = [4]
console,log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "basketball", "tennis", "baseball"];
console.log(sports);

const recipeIngredients = [
    'Flour',
    true,
    'Sugar',
    2,
    'Eggs',
    {ingredient: 'Milk', quantity: 1, unit: 'cup'},
    ['Salt', 'Pepper']

];

console.log(recipeIngredients);

// Accessing array elements

const firstFruit = fruits[0];
console.log(firstFruit);

// length property

const numberOfFruits = fruits.length;
console.log(numberOfFruits); 

// Mutability

fruits.push('watermelon');
console.log(fruits);

// immutability

const newFruits = fruits.concat(['kiwi', 'strawberry']);
console.log(newFruits);
console.log(fruits);

// Chekiing arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

// practical example

const numbersArray = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log('Sum: ', sum);