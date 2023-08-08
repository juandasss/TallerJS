/*
-JUAN ESTEBAN GOMEZ
-JUAN DAVID ALARCON
Leer un numero determinar si es par o impar e imprimir el mensaje
*/ 
'use strict';

let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  alert(`El número ingresado es par.`);
} else {
  alert(`El número ingresado es impar.`);
}

