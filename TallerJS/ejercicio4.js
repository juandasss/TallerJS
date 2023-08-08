/*
-JUAN DAVID ALARCON 
-JUAN ESTEBAN GÓMEZ 
Leer 3 números, determinar el mayor de los 3 e imprimirlo.
*/

'use strict';

let numero1 = parseFloat(prompt('Introduzca el primer número'));
let numero2 = parseFloat(prompt('Introduzca el segundo número'));
let numero3 = parseFloat(prompt('Introduzca el tercer número'));

let numM = numero1;

if (numero2 > numM){
    numM = numero2;
}

if (numero3 > numM){
    numM = numero3;
}

alert(`El numero mayor es: ${numM}`);