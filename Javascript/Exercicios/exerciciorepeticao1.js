/*
Faça um programa que peça uma nota, entre zero e dez. 
Mostre uma mensagem caso o valor seja inválido e 
continue pedindo até que o usuário informe um valor válido.
*/


let nota = parseFloat(prompt(`Digite uma nota válida:`));
let notaInvalida = isNaN(nota) || nota < 0 || nota > 10;

for (let i = 0; notaInvalida; i++) {
    alert(`Nota inválida`);
    nota = parseFloat(prompt(`Digite uma nota válida:`));
    notaInvalida = isNan(nota) || nota < 0 || nota > 10;
}

    alert(`Programa encerrado com a nota ${nota}`);


