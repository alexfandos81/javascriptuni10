//'strings.js'
'use strict'
/******************************
* Trabajando con cadenas
******************************/
let cad = "Cadena";
console.log(cad + ", cadena 2");
console.log('Me dijo "hola"');
console.log('Me dijo "hola"'.length);
let s1 = "I was born in 10/03/1920 and the war started in 19/09/1939";
console.log(s1.match(/\d{2}\/\d{2}\/\d{4}/g));
console.log(s1.substr(2, 3));
let n = 12;
console.log(typeof String(n));
console.log(typeof ("" + n));
let truenull = "" + true + null; // Transforma todo a cadena y concatena
console.log(typeof truenull);
console.log(truenull);
/***************************
* Conversión a número
***************************/
let c = "12";
console.log(typeof Number(c));
console.log(typeof +c);
let c2 = "asdf";
console.log(+c2); // NaN
/********************************************
* Conversión a booleano
* (Útil para ver equivalencias true/false)
********************************************/
let n2 = 0;
console.log(!!n2);
console.log(!!1);
console.log(!!-345);
console.log(!!"");
console.log(!!"dasdf");
console.log(!!undefined);
console.log(!!null);
if(0 == false) {
// Entra
}
if(0 === false) {
// No entra
}