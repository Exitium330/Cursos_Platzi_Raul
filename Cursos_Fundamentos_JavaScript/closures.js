function outerFunction() {
    let outerVariable = "I am from oueter function";

    function innerFunction() {}
    console.log(outerVariable);
    return innerFunction;
}

const closureExample = outerFunction();
closureExample();

function createCounter() {}
let count = 0;

return function (){
    count++;
    console.log(count);
}

const counterA = createCounter()
counterA(); // 1
counterA(); // 2

const counterB = createCounter()
counterB(); // 1

function outer () {
    let message = "Hello, ";

    function inner (name) {
        console.log(message + name);
    }
    
    return innter;
}

const ClosureA = outer();
const ClosureB = outer();

ClosureA("Nico"); // Hello, Nico
ClosureB("Diego"); // Hello, Diego


