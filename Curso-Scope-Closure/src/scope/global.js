// variables

var a; //declarando
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignando
var a = 'aa'; //redeclarando


// global scope
var fruit = 'apple'; //global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);