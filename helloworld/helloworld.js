"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// console.log(acessarSistema<Usuario>(usuario));
// console.log(acessarSistema<Admin>(admin));
// function acessar_sistema(usuario:Usuario):Usuario{
//     return usuario;
// }
// console.log(acessar_sistema(usuario));
const numberMax = 100;
let contador = 100;
if (contador < numberMax) {
    contador++;
}
const permissaoIdadeDirigir = 16;
if (permissaoIdadeDirigir >= 18) {
    // console.log('voce esta habilitado para dirigir');
}
else {
    // console.log('voce nao esta habilitado para dirigir')
}
let desconto;
let valorCompra = 14;
if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
}
else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
// console.log(`Voce teve um desconto de...: ${desconto}%deconto}`);
const idadeVotacao = 15;
// if (idadeVotacao >= 18){
//     console.log('voce é elegivel para votar');
// }else{
//     console.log('voce nao é elegivel para votar');
// }
const podeVotar = (idadeVotacao >= 18)
    ? 'voce é elegivel para votar'
    : 'voce nao é elegivel para votar';
// console.log(podeVotar);
const arrayNumeros = [5, 4, 3, 2, 1, 0];
for (const i in arrayNumeros) {
    // console.log(i);
}
function somarNumeros(number1, number2) {
    return number1 + number2;
}
//function anonima
const saudar = function (mensagem) {
    return mensagem;
};
// arrow functions, mais usada atualmente
const saudar02 = (mensagem) => {
    return mensagem;
};
// function with constructor
const saudar03 = new Function('mensagem', 'return "Fala " + mensagem');
// console.log(saudar03('Galera'));
// console.log(saudar('ola developers com arrow functions'));
function informarDadosPessoas(idPessoa, nome, email) {
    if (email != undefined) {
        console.log('Id Funcionario: ', idPessoa, 'Nome: ', nome, 'Email: ', email);
        return;
    }
    console.log('Id Funcionario: ', idPessoa, 'Nome: ', nome);
}
// informarDadosPessoas(1,'Felipe',);
// informarDadosPessoas(2,'gilmara','gilmara@gmail.com');
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuario(a) não conectado(a)');
}
let pessoa15;
pessoa15 = {
    IdFuncionario: 1,
    nome: 'Felipe',
};
// console.log(pessoa15);
/*
* default parameters
* */
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
function exibirMensagem(mensagem, saudar = 'fala pessoal') {
    return saudar + ' ' + mensagem + '!';
}
function exibirNome(nome, sobrenome = 'Mateus') {
    return nome + ' ' + sobrenome;
}
const resultado01 = exibirNome('Felipe');
const resultado02 = exibirNome('Felipe', undefined);
const resultado03 = exibirNome('Felipe', 'de Oliveira');
function somarNumeros2(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
// console.log(somarNumeros2(1,2,3));
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
// console.log(listarFrutas('Felipe, voce precisa ir na feira e comprar ....: ',
//     'maça', 'banana','cenoura', 'abacaxi'));
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            // console.log(produto);
        }
    }
}
const departamentoInformatica = new Produtos();
// console.log('todos os produtos do departamento de informatica disponivel no estoque...:');
departamentoInformatica.exibirProdutos('mouse', 'notebook', 'usb', 'teclado', 'webcam');
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa21 = new Pessoa('felipe', 'mateus');
// console.log(pessoa21.nomeCompleto());
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 123;
estudante.nome = 'felipe';
// console.log('codigo do estudante: ' + estudante.codigoEstudante);
// console.log('nome do estudante: ' + estudante.nome);
class Estudante01 {
    constructor(nome, codigoEstudante) {
        this.nome = nome;
        this.codigoEstudante = codigoEstudante;
    }
    listarEstudante() {
        console.log('Codigo: ' + this.codigoEstudante);
        console.log('nome: ' + this.nome);
    }
}
const estudante1 = new Estudante01('felipe', 11);
// estudante1. listarEstudante();
// public
class Estudante51 {
}
const estudante51 = new Estudante51();
estudante51.codigoEstudante = 1;
estudante51.nomeEstudante = 'felipe';
// console.log(estudante51.codigoEstudante);
// console.log(estudante51.nomeEstudante);
//private
class Estudante52 {
    constructor(codigo, nome, idade) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
        this.idade = idade;
    }
    retornarDadosEstudantes() {
        return `codigo: ${this.codigoEstudante} | 
        nome: ${this.nomeEstudante} | 
        idade: ${this.idade}`;
    }
}
const estudante52 = new Estudante52(1, 'felipe', 26);
// console.log(estudante52.retornarDadosEstudantes());
// protected
class Estudante53 {
    constructor(codigo, nome) {
        this.codigoEstudante = codigo;
        this.nomeEstudante = nome;
    }
}
class Pessoa101 extends Estudante53 {
    constructor(codigo, nome, curso) {
        super(codigo, nome);
        this.curso = curso;
    }
    retornarDadosAluno() {
        return `codigo: ${this.codigoEstudante} | 
        nome: ${this.nomeEstudante} | 
        curso: ${this.curso}`;
    }
}
const estudante102 = new Pessoa101(1, 'felipe', 'ads');
class Funcionario {
    constructor(dataNascimento) {
        this.dateNascimento = dataNascimento;
    }
}
const funcionario = new Funcionario(new Date(1997, 12, 19));
// funcionario.dateNascimento = new Date(1997,12,19) error
//outra forma de utilizar readonly
class Funcionario01 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
class Funcionario02 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}
const func = new Funcionario02('felipe', 123);
func.nome = 'mario';
const funcionario03 = {
    codigo: 1,
    nome: 'mario',
};
// funcionario03.codigo = 23; error
// funcionario03.nome = 'felipe'; error
// acessando sem o readonly
const funcionario04 = {
    codigo: 1,
    nome: 'mario',
};
//get
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
// console.log(new Quadrado().calcularQuadrado);
//set
class Pessoa52 {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa1221 = new Pessoa52();
pessoa1221.retornarNomePessoa('felipe');
// console.log(pessoa1221.nome);
class Estudante123 {
    constructor() {
        this._nome = 'felipe mateus';
    }
    get nomeEstudante() { return this._nome; }
}
const estudante12313 = new Estudante123();
const resultado213 = estudante12313.nomeEstudante;
// console.log(resultado213);
//set explicacao maior
class Estudante1245 {
    constructor(nome, semestre, curso) {
        this._nome = nome;
        this._semestre = semestre;
        this._curso = curso;
    }
    get cursos() {
        return this._curso;
    }
    set cursos(setCurso) {
        this._curso = setCurso;
    }
}
const estudante54 = new Estudante1245('felipe', 5, 'ads');
console.log(estudante54);
estudante54._curso = 'sistema da informação';
console.log(estudante54);
