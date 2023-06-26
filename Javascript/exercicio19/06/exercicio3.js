//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.


let sexo = (prompt(`Informe seu sexo:`));

if (sexo == `F`) {
    alert(`F - Feminino`);
}   else if (sexo == `M`) {
    alert(`M-Masculino`);
}   else {
    (`Sexo Inválido`);
}