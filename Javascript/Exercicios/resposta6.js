/*
Faça um Programa que leia três números e mostre o maior deles.
*/

let numero1= parseInt(prompt(`Digite o numero 1`));
let numero2= parseInt(prompt(`Digite o numero 2`));
let numero3= parseInt(prompt(`Digite o numero 3`));

let auxiliar = 0;

if (numero1 >= numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

if (numero2 >= numero3) {
    auxiliar = numero2;
    numero2 = numero3;
    numero3 = auxiliar;
}

if (numero1 >= numero2) {
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

alert(`${numero1} < ${numero2} < ${numero3}`);