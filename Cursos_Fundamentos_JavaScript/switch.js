switch(expresion) {
    case valor1:
        // Código a ejecutar si la expresión coincide con valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión coincide con valor2
        break;
    // Puedes tener tantos casos como necesites
    default:
        // Código a ejecutar si la expresión no coincide con ningún caso
        break;
}

let expr = "Papayas"

switch (expr) {
    case "Naranjas":
        console.log("Naranjas son $0.59 el kilo.");
        break;
    case "Manzanas":
        console.log("Manzanas son $0.32 el kilo.");
        break;
    case "Plátanos":
        console.log("Plátanos son $0.48 el kilo.");
        break;
    default:
        console.log("Lo siento, no tenemos " + expr + "."); 
        break;
}