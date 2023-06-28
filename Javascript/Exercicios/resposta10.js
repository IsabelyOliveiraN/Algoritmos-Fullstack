/* 
Faça um Programa que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou 
"Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/




let resposta = prompt(`Qual o turno que você estuda?\nM-Matutino, V-Vespertino ou N-Nortuno`);

resposta = resposta[0].toLowerCase();

switch (resposta) {
    case 'm':
        alert(`Bom dia!`);
        break;
    case 'v':
        alert(`Boa tarde!`);
        break;
    case 'n':
        alert(`Boa noite!`);
        break;
    default:
        alert(`Valor inválido`);
}