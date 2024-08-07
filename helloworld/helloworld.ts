let mensagem: string = 'hello world';// definindo a variavel e o tipo dela

// console.log(mensagem);

function addnumber(numb1: number, numb2: number ):number
{
    return numb1 + numb2;
}
// console.log(addnumber(1,1));

let pessoa : {
    nome: string;
    idade: number;
    altura: number;
    data: Date;
}

pessoa = {
    nome: 'felipe',idade: 26, altura: 1.67, data: new Date('1997/12/19')
};

// console.log(pessoa);


let tarefaConcluida : boolean = true;

let tarefaPendente : boolean = false;

let concluido : boolean = false;

// if (concluido) {
//     console.log('tarefa concluida com sucesso!!');
// }else {
//     console.log('tarefa pendente');
// }

// console.log(tarefaConcluida);

let numb1:number = 23.0;
let numb2:number = 0x78CF;
let numb3:number = 0o577;
let numb4:number = 0b110001;

// console.log('NUMBER - Ponto Flutuante...:', numb1);
// console.log('HEXADECIMAL...:', typeof (numb2));
// console.log('OCTAL...:', numb3);
// console.log('BINARIO...:', numb4);

let numbBig1:bigint = 9007199254740991n;
let numbBig2:bigint = 0x78CFn;
let numbBig3:bigint = 0o577n;
let numbBig4:bigint = 0b110001n;

// console.log('NUMBER - Ponto Flutuante...:', numbBig1);
// console.log('HEXADECIMAL...:', numbBig2);
// console.log('OCTAL...:', numbBig3);
// console.log('BINARIO...:', numbBig4);

let nomePessoa : string = 'felipe';

let nomecompleto : string = `Seja bem vindo ${nomePessoa}`;
// console.log(nomecompleto);

let frutas:Array<string> = ['maça','banana','abacaxi'];

let idiomas: Array<string> = ['portugues','ingles','espanhol','frances'];

idiomas.push('mandarim');

let listaNumeros: Array<number> = [0,1,2,3,4,5];
listaNumeros = [...listaNumeros,6,7,8,9];

let linguagem: Array<string> = ['python','php','ts','c#'];

function funcaoLinguagem(linguagens:Array<string>) {
    for (let i = 0; i < linguagens.length; i++) {
        // console.log(linguagens[i]);
    }
}

funcaoLinguagem(linguagem);

let pessoa1: [nome:string, sobrenome:string, idade:number] = ['felipe', 'mateus', 26];

let listaFrutas: [string, ...string[]] = ['maça','banana','abacaxi'];

let listaFrutas2: [number, boolean, ...string[]] = [5,true,...listaFrutas];

function listarPessoas(nomes: string[],idades:number[]):(string | number)[] {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['felipe','regina'],[26,19]);

type Nome = | [primeiroNome: string, sobrenome:string]
    | [primeiroNome: string, nomeMeio:string ,sobrenome:string];

function criarPessoa(...nome:Nome){
    return [...nome];
}

enum Idioma {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Ingles = 'EN',
    Frances = 'FR'
}

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}

const enum Comida {
    Hamburguer,
    Massa,
    torta,
    Churrasco
}

function comida(c:Comida){
    return 'Comidas muito apetitosas!';
}
// console.log(comida(Comida.Churrasco));
// console.log(comida(Comida.Massa));

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id : 1,
    status: Tarefa.Done,
    descricao: 'Parabens! Tarefa concluida com sucesso!',
};

// if (concluidaTarefa.status === Tarefa.Done) {
//     console.log('Enviar e-mail: Tarefa Concluida!');
// }

const a: any = 26;
const b: Array<string> = ['felipe'];

const result = a + b;

let frase;

frase = 'oiooo';

const formulario: {[campoFormulario:string]:any} = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26,
}

let valorVariavel : unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = {};
valorVariavel = 'oi eae';


let valor: unknown;

// let valor1: boolean = valor;

let algumacoisaAny: any;
let algumacoisaUnknown: unknown;

// console.log(algumacoisaAny.toFixed(2));
if (typeof algumacoisaUnknown === 'number') {
    console.log(algumacoisaUnknown.toFixed());
}

function logError(errorMessage:string) : void {
    // console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - name!');

const logErrorExample2 = (errorMessage : string) : void => {
    // console.log(errorMessage);
}
logErrorExample2('Required field - SurName!');

let variavelExemploVoid: void;
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

function error(message:string) : never {
    throw new Error(message);
}
// console.log(error('erro de mensagem'));

function rejectMessage() : never {
    return error('Error de mensagem - 02');
}

// console.log(rejectMessage());

const loopInfinity = function loop(){
    while (true){
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
}

function onboarding01(funcionario: { nome:string }) : string {
    return 'seja bem vindo ' + funcionario.nome;
}

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa:Pessoa): string {
    return (
        'Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: ' + pessoa.funcao
    )
}

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem:string;
};

function onboarding03(pessoa:Pessoa03): string {
    return (
        'Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem
    )
}

interface Pessoa04 {
 nome: string;
 funcao: string;
 linguagem:string;
 email?:string;
}

function onboarding04(pessoa:Pessoa04): string {
    return (
        'Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem
    )
}

// console.log(onboarding04({nome: 'felipe',funcao:'developer php',
//     linguagem:'php',email:'dsadas'}));

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem:string;
    readonly email:string;
}

function onboarding05(pessoa:Pessoa05): string {
    return (
        'Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: '
        + pessoa.funcao + ' voce trabalhara com a linguagem :' + pessoa.linguagem +
            'seu email sera:' + pessoa.email
    )
}

// console.log(onboarding05({nome: 'felipe',funcao:'developer php',
//     linguagem:'php',email:'dsadas@gmail.com'}));

interface Mae{
    nome:string;
}

interface Pai{
    sobrenome:string;
}

interface Filho extends Mae, Pai{
    idade:number;
}

const filho: Filho = {
    nome: 'Felipe',
    sobrenome: 'Mateus',
    idade:26
}

// console.log(filho);

interface Cachorro{
    tipo:string;
}

interface Gato{
    tipo:string;
}

type Animal = Cachorro & Gato;

type Usuario = {
    nome: string;
    email:string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Felipe',
    email: 'fe@gmail.com'
}

const admin: Admin = {
    nome: 'Felipe',
    email: 'fe@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario:T):T{
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

if (permissaoIdadeDirigir >= 18){
    console.log('voce esta habilitado para dirigir');
} else {
    console.log('voce nao esta habilitado para dirigir')
}

let desconto : number;
let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5 ){
    desconto = 5;
}else if (valorCompra > 5 && valorCompra <= 10){
    desconto = 10;
}else {
    desconto = 15;
}

console.log(`Voce teve um desconto de...: ${desconto}%deconto}`);


const idadeVotacao = 15;
// if (idadeVotacao >= 18){
//     console.log('voce é elegivel para votar');
// }else{
//     console.log('voce nao é elegivel para votar');
// }

const podeVotar = (idadeVotacao >= 18)
    ? 'voce é elegivel para votar'
    : 'voce nao é elegivel para votar'

console.log(podeVotar);

