'use strict'
console.log("Write a function called add7 that takes one number and returns that number +7");


function add7(){
    let numOne = prompt('add number');
    return parseInt(numOne) + 7;
}
console.log(add7());


let a = prompt();
let add77 = () => parseInt(a)+7;
alert(add77(a));