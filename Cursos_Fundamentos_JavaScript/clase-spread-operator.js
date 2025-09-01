// 1. Copying an array

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log('Original Array:', originalArray);
console.log('Copied Array:', copiedArray);

// 2. Combining arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const combinedArray = [...array1, ...array2];

console.log('Combined Array:', combinedArray);

// 3. Creating a new array with additional elements

const baseArray = [1,2,3];
const arrayWhithAditionalElements = [...baseArray, 4, 5, 6];

console.log(baseArray);
console.log(arrayWhithAditionalElements);

// 4.pass elements to functions

function sum (a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); // 6

console.log('Sum Result:', result);