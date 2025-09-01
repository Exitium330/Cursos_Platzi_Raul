//Capacidades que tienen las funciones al igual que otros objetos en JavaScript

//1. Pasar funciones como argumentos a otras funciones -- callbacks
/*
function a () {}
function b (a) {}
b(a);

//

function a () {
function b () {}
return b
}

//2. Asignar funciones a variables o propiedades de objetos

const a = function () {}

// Tener propiedades y métodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones -- nested functions

function a () {
function b () {
    function c () {
    
        }
     c()
    }
b()
}
a()

// Es posible almacenar funciones en objetos
*/
const rocket = {
    name: 'Falcon 9',
    launchMessege: function launchMessege () {
        console.log('Liftoff!');
    }
}

rocket.launchMessege();