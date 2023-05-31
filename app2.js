const prompt = require('prompt-sync')();

// Armazena a entrada do usuário na variavel nome
const nome = prompt('Digite seu nome: ');

// Armazena a entrada do usuário na variavel idade
const idade = prompt('Digite sua idade: ');

// Define a maior idade
const maiorIdade = 18;



console.log(`Oi ✌ ${nome}`); // utiliza crase para fazer a interpolação com ${}
console.log(`Sua idade é ${idade}`);

if (idade < maiorIdade) {
    console.log('Você não pode pagar boletos!');
} else {
    console.log('Parabéns, já pode pagar boletos!');
}

// A utilização do IF ELSE (Se Sim{IF} ou Se Não{ELSE}).