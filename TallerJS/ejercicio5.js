/*
JUAN DAVID ALARCON 
JUAN ESTEBAN GÓMEZ 
Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el promedio.
*/

let nota1 = parseFloat(prompt('Introduzca una nota'));
let nota2 = parseFloat(prompt('Introduzca una nota'));
let nota3 = parseFloat(prompt('Introduzca una nota'));
let nota4 = parseFloat(prompt('Introduzca una nota'));

let promedio = (nota1 + nota2 + nota3 + nota4)/4;

alert(`Nota1: ${nota1}`);
alert(`Nota2: ${nota2}`);
alert(`Nota3: ${nota3}`);
alert(`Nota4: ${nota4}`);
alert(`El promedio es: ${promedio}`);