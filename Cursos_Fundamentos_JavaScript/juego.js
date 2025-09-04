const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número entre 1 y 10:"));

console.log('Este es el número que usaste: ' + numeroJugador);

if (numeroJugador === numeroSecreto) {
    console.log('¡Felicidades! Has adivinado el número secreto.');
}
else if (numeroJugador < numeroSecreto) {
    console.log('Lo siento, el número fue mas bajo, el número secreto era ' + numeroSecreto + '. Inténtalo de nuevo.');
}
else if (numeroJugador > numeroSecreto) {
    console.log('Lo siento, el número fue mas alto, el número secreto era ' + numeroSecreto + '. Inténtalo de nuevo.');
}