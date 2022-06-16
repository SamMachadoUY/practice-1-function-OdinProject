'use strict'
/* 

Write a function called capitalize that takes a string and return that string with
only the first letter capitalized. Make sure that it can take strings that are lowercase,
Uppercase or BoTh.

*/

function capitalize(){
    let world = prompt('world enter');
    
    let firstLetterMay = world[0].toUpperCase();
        //CORTA la posicion cero del array y la convierte en mayuscula
    
    let restWorld = world.slice(1).toLowerCase();
        //hace una COPIA desde la posicion 1 en adelante
        //TRANSFORMA el resto de las mayus a minuscula
         

    return firstLetterMay + restWorld;
}

console.log(capitalize());