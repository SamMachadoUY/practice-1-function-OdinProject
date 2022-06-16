'use strict'
/*
    Write a a function called lastLetter that takes a string 
    and returns the very last letter of that string
*/

function lastLetter(){
    let palabra = prompt('The last letter will be displayed');
    let worldLast = palabra.slice(-1);
    
    return worldLast;
}
console.log(lastLetter());