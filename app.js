const prompt = require('prompt-sync')();

//const nome = prompt('');
//console.log(`Oi ✌ ${nome}`); // utiliza crase para fazer a interpolação com ${}

// A utilização do IF ELSE (Se Sim{IF} ou Se Não{ELSE}).
let numero1 = 50;
let numero2 = 70;

let expressao = numero1 > numero2
console.log('Tipo da Variavel', typeof expressao);
console.log('Expressão', expressao);

if (expressao) {
    console.log('O número 1 é maior que o número2');
}
else {
    console.log('O número 2 é maior que o número  1');
}

// IF e ELSE com Strings

let nome1 = 'João';
let nome2 = 'Maria';

let expressao2 = nome1 == nome2;

console.log('Tipo da Variavel', typeof expressao2);
console.log('Expressão', expressao2);

if (expressao2) {
    console.log('Os nome são iguais');
} else {
    console.log('Os nome são diferentes');
}