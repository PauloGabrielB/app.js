// Fazer um programa que verifique se um número é par ou ímpar

// Capturar o prompt do usuário
const prompt = require('prompt-sync')();


const entradaDoUsuario = prompt('Digite um Número: ');

const restoDaDivisao = entradaDoUsuario % 2;

// Se número for par: imprima '<numero> é par'
if (restoDaDivisao) {
    console.log('O resto da Divisão é', restoDaDivisao, 'é impar');
} else {
    console.log('O resto da Divisão é', restoDaDivisao, 'é par');
}