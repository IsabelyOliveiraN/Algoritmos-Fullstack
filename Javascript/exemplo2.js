let nota = parseFloat(prompt(`Informe sua nota`));

let entradaInvalida = isNaN(nota) || nota < 0 || nota > 10;
let aprovado = nota >= 7;
let reprovado = nota < 3;



if (entradaInvalida) {
    alert(`Entrada invalida \n Digite novamente`);
}   else if (aprovado) {
    alert(`Parabens! Você está aprovado`);
}   else if (reprovado) {
    alert(`Infelizmente! Você está reprovado`);
}   else {
    alert(`Quase lá! Você está em recuperação`);
    let notaRecuperacao = parseFloat(prompt(`Informe sua nota da recuperação:`));
    let mediaRecuperacao = (nota + notaRecuperacao) / 2;
    aprovado = mediaRecuperacao >= 5;
    if (aprovado) {
        alert(`Parabens! Você está aprovado`);
    } else {
        alert(`Infelizmente! Você está reprovado`);
    }
}