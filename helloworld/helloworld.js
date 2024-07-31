"use strict";
let mensagem = 'hello world'; // definindo a variavel e o tipo dela
// console.log(mensagem);
function addnumber(numb1, numb2) {
    return numb1 + numb2;
}
// console.log(addnumber(1,1));
let pessoa;
pessoa = {
    nome: 'felipe', idade: 26, altura: 1.67, data: new Date('1997/12/19')
};
// console.log(pessoa);
let tarefaConcluida = true;
let tarefaPendente = false;
let concluido = false;
// if (concluido) {
//     console.log('tarefa concluida com sucesso!!');
// }else {
//     console.log('tarefa pendente');
// }
// console.log(tarefaConcluida);
let numb1 = 23.0;
let numb2 = 0x78CF;
let numb3 = 0o577;
let numb4 = 0b110001;
// console.log('NUMBER - Ponto Flutuante...:', numb1);
// console.log('HEXADECIMAL...:', typeof (numb2));
// console.log('OCTAL...:', numb3);
// console.log('BINARIO...:', numb4);
let numbBig1 = 9007199254740991n;
let numbBig2 = 0x78cfn;
let numbBig3 = 383n;
let numbBig4 = 49n;
// console.log('NUMBER - Ponto Flutuante...:', numbBig1);
// console.log('HEXADECIMAL...:', numbBig2);
// console.log('OCTAL...:', numbBig3);
// console.log('BINARIO...:', numbBig4);
let nomePessoa = 'felipe';
let nomecompleto = `Seja bem vindo ${nomePessoa}`;
// console.log(nomecompleto);
let frutas = ['maça', 'banana', 'abacaxi'];
let idiomas = ['portugues', 'ingles', 'espanhol', 'frances'];
idiomas.push('mandarim');
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9];
let linguagem = ['python', 'php', 'ts', 'c#'];
function funcaoLinguagem(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        // console.log(linguagens[i]);
    }
}
funcaoLinguagem(linguagem);
let pessoa1 = ['felipe', 'mateus', 26];
let listaFrutas = ['maça', 'banana', 'abacaxi'];
let listaFrutas2 = [5, true, ...listaFrutas];
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['felipe', 'regina'], [26, 19]);
function criarPessoa(...nome) {
    return [...nome];
}
var Idioma;
(function (Idioma) {
    Idioma["Portugues"] = "PT-BR";
    Idioma["Espanhol"] = "ES";
    Idioma["Ingles"] = "EN";
    Idioma["Frances"] = "FR";
})(Idioma || (Idioma = {}));
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
function comida(c) {
    return 'Comidas muito apetitosas!';
}
// console.log(comida(Comida.Churrasco));
// console.log(comida(Comida.Massa));
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabens! Tarefa concluida com sucesso!',
};
// if (concluidaTarefa.status === Tarefa.Done) {
//     console.log('Enviar e-mail: Tarefa Concluida!');
// }
const a = 26;
const b = ['felipe'];
const result = a + b;
let frase;
frase = 'oiooo';
const formulario = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26,
};
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = {};
valorVariavel = 'oi eae';
let valor;
// let valor1: boolean = valor;
let algumacoisaAny;
let algumacoisaUnknown;
// console.log(algumacoisaAny.toFixed(2));
if (typeof algumacoisaUnknown === 'number') {
    console.log(algumacoisaUnknown.toFixed());
}
function logError(errorMessage) {
    // console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - name!');
const logErrorExample2 = (errorMessage) => {
    // console.log(errorMessage);
};
logErrorExample2('Required field - SurName!');
let variavelExemploVoid;
// variavelExemploVoid = 1; //error
variavelExemploVoid = null;
variavelExemploVoid = undefined;
// console.log(variavelExemploVoid);
let variavelTestNull = null;
// console.log(variavelTestNull);
// console.log(typeof variavelTestNull);
let variavelTesteUndefied;
// console.log(variavelTesteUndefied);
// console.log(typeof variavelTesteUndefied);
// == compara resultado, === compara valor e o tipo
// console.log('exemplo 1:', null == undefined);
// console.log('exemplo 2:', null === undefined);
function error(message) {
    throw new Error(message);
}
// console.log(error('erro de mensagem'));
function rejectMessage() {
    return error('Error de mensagem - 02');
}
// console.log(rejectMessage());
const loopInfinity = function loop() {
    while (true) {
        console.log('oi');
    }
};
// console.log(loopInfinity());
// const algumaCoisaVoid : void = null;
// const algumaCoisaNever : never = null;
const pessoa12 = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26,
    funcao: 'developer php',
};
function onboarding01(funcionario) {
    return 'seja bem vindo ' + funcionario.nome;
}
function onboarding02(pessoa) {
    return ('Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: ' + pessoa.funcao);
}
function onboarding03(pessoa) {
    return ('Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem);
}
function onboarding04(pessoa) {
    return ('Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem);
}
function onboarding05(pessoa) {
    return ('Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem +
        'seu email sera:' + pessoa.email);
}
const filho = {
    nome: 'Felipe',
    sobrenome: 'Mateus',
    idade: 26
};
const usuario = {
    nome: 'Felipe',
    email: 'fe@gmail.com'
};
const admin = {
    nome: 'Felipe',
    email: 'fe@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
// function acessar_sistema(usuario:Usuario):Usuario{
//     return usuario;
// }
// console.log(acessar_sistema(usuario));
