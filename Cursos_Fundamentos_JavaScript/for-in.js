/*

for in ---> objetos

propiedades = valor 

array, string 

item

for (variable in object) {
    //bloque de código a ejecutar en cada iteración
}
*/ 

const listaDeCompras = {
    manzanas: 5,
    bananas: 10,
    cerezas: 20,
    uvas: 30
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}
/* 
for (fruta of listaDeCompras) {
    console.log(fruta);
}
*/