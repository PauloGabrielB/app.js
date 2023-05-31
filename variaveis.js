// Tipos de Variaveis no Java Script (var), (let) e (const)

var numero1 = 10;
let numero2 = 12;
const numero3 = 15;
console.log(numero1);
console.log(numero2);
console.log(numero3);
// variaveis Nomeadas
var cidade = 'Fortaleza';
// Outro Tipo de Variavel com varios valores (let)
let endereco = {
    rua :'Minha Rua',
    numero :'215',
    bairro :'Messejana',
    cidade :'Fortaleza',
    estado :'Ceará',
};
// Imprimindo Variaveis Nomeadas

console.log(cidade);
console.log(endereco);
// Imprimindo Variaveis com varios valores 
console.log(cidade, endereco);
// console.log(sobrenome);
let nome = 'Paulo';
nome = 'Paulo Gabriel';
let sobrenome = 'Borges M. Rodrigues';
// concatenação
let nomeCompleto = (nome + ' ' + sobrenome);
console.log(nomeCompleto);
// Soma
const idade = 27+3;
const idade2 = 12;
const idade3 = idade + idade2;
// concatenação com números 
const informacaoCompleta = 'meu nome é ' + nomeCompleto + ' e tenho ' + idade + ' anos.';
console.log(informacaoCompleta);