/*
-JUAN ESTEBAN GOMEZ
-JUAN DAVID ALARCON
Realizar un programa que pida al usuario 2 números y se realicen las 4 operaciones básicas 
(Suma, resta, multiplicación, división). Imprimir los resultados.
*/
'use strict';

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

alert(`Suma: ${suma}`);
alert(`Resta: ${resta}`);
alert(`Multiplicacion: ${multiplicacion}`);
alert(`Division: ${division}`);
