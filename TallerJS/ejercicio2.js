/* 
-JUAN DAVID ALARCON 
-JUAN ESTEBAN GÓMEZ 
Leer un número e imprimir un mensaje si es positivo o negativo
*/

'use strict';

let parImpar = parseFloat(prompt("Dame un numero"));
let resultado = (parImpar> 0) ? "Es positivo" : "Es negativo" ;
alert(resultado)