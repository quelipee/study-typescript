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
    // console.log('voce esta habilitado para dirigir');
} else {
    // console.log('voce nao esta habilitado para dirigir')
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

// console.log(`Voce teve um desconto de...: ${desconto}%deconto}`);


const idadeVotacao = 15;
// if (idadeVotacao >= 18){
//     console.log('voce é elegivel para votar');
// }else{
//     console.log('voce nao é elegivel para votar');
// }

const podeVotar = (idadeVotacao >= 18)
    ? 'voce é elegivel para votar'
    : 'voce nao é elegivel para votar'

// console.log(podeVotar);


const arrayNumeros : number[] = [5,4,3,2,1,0]
for(const i in arrayNumeros){
    // console.log(i);
}

function somarNumeros(number1: number, number2: number) : number{
    return number1 + number2;
}

//function anonima
const saudar = function (mensagem: string) : string{
    return mensagem;
};

// arrow functions, mais usada atualmente

const saudar02 = (mensagem : string) : string =>{
    return mensagem;
}

// function with constructor

const saudar03 = new Function('mensagem', 'return "Fala " + mensagem');


// console.log(saudar03('Galera'));
// console.log(saudar('ola developers com arrow functions'));

function informarDadosPessoas(idPessoa: number, nome: string, email?:string) : void{
    if (email != undefined){
        console.log('Id Funcionario: ', idPessoa, 'Nome: ', nome,
            'Email: ', email);
        return;
    }
    console.log('Id Funcionario: ', idPessoa,'Nome: ', nome);
}

// informarDadosPessoas(1,'Felipe',);
// informarDadosPessoas(2,'gilmara','gilmara@gmail.com');


function mensagemLog(mensagem : string, usuarioId ?: number) : void{
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuario(a) não conectado(a)');
}

// mensagemLog('atualizar pagina');
// mensagemLog('usuario logado com sucesso!!',778811);

type Pessoa15 = {
    IdFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
}

let pessoa15 : Pessoa15;

pessoa15 = {
    IdFuncionario: 1,
    nome: 'Felipe',
};

// console.log(pessoa15);

/*
* default parameters
* */

function descontoCompra(preco : number, desconto = 0.08) : number {
    return preco * (1 - desconto);
}

function exibirMensagem(mensagem : string, saudar = 'fala pessoal') : string {
    return saudar + ' ' + mensagem + '!';
}

function exibirNome(nome : string, sobrenome = 'Mateus'){
    return nome + ' ' + sobrenome;
}

const resultado01 = exibirNome('Felipe');
const resultado02 = exibirNome('Felipe', undefined);
const resultado03 = exibirNome('Felipe', 'de Oliveira');

function somarNumeros2(...numeros : number[]){
    let total = 0;
    numeros.forEach((numero : number) => (total += numero));
    return total;
}

// console.log(somarNumeros2(1,2,3));

function listarFrutas(frase : string, ...frutas : string[]){
    return frase + ' ' + frutas.join(', ');
}

// console.log(listarFrutas('Felipe, voce precisa ir na feira e comprar ....: ',
//     'maça', 'banana','cenoura', 'abacaxi'));

class Produtos{
    public exibirProdutos(...produtos : string[]):void{
        for(const produto of produtos){
            // console.log(produto);
        }
    }
}

const departamentoInformatica : Produtos = new Produtos();
// console.log('todos os produtos do departamento de informatica disponivel no estoque...:');

departamentoInformatica.exibirProdutos('mouse', 'notebook', 'usb', 'teclado', 'webcam');


class Pessoa{
    nome: string;
    sobrenome: string;
    constructor(nome : string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa21 : Pessoa = new Pessoa('felipe','mateus');
// console.log(pessoa21.nomeCompleto());

class Estudante{
    codigoEstudante : number;
    nome : string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 123;
estudante.nome = 'felipe';

// console.log('codigo do estudante: ' + estudante.codigoEstudante);
// console.log('nome do estudante: ' + estudante.nome);

class Estudante01{
    codigoEstudante : number;
    nome : string;

    constructor(nome : string, codigoEstudante : number) {
        this.nome = nome;
        this.codigoEstudante = codigoEstudante;
    }
    listarEstudante(){
        console.log('Codigo: ' + this.codigoEstudante);
        console.log('nome: ' + this.nome);
    }
}

const estudante1 = new Estudante01('felipe',11);

// estudante1. listarEstudante();


// public
class Estudante51 {
    codigoEstudante : number;
    nomeEstudante : string;
}

const estudante51 = new Estudante51();
estudante51.codigoEstudante = 1;
estudante51.nomeEstudante = 'felipe';

// console.log(estudante51.codigoEstudante);
// console.log(estudante51.nomeEstudante);


//private
class Estudante52 {
    codigoEstudante : number;
    nomeEstudante : string;
    private idade : number;

    constructor(codigo : number, nome : string, idade : number) {
        this.codigoEstudante = codigo;
        this.nomeEstudante  = nome;
        this.idade  = idade;
    }

    retornarDadosEstudantes() {
        return `codigo: ${this.codigoEstudante} | 
        nome: ${this.nomeEstudante} | 
        idade: ${this.idade}`;
    }
}

const estudante52 = new Estudante52(
    1,
    'felipe',
    26
);

// console.log(estudante52.retornarDadosEstudantes());


// protected
class Estudante53 {
    codigoEstudante : number;
    protected nomeEstudante : string;

    constructor(codigo : number, nome : string) {
        this.codigoEstudante  = codigo;
        this.nomeEstudante  = nome;
    }
}

class Pessoa101 extends Estudante53{
    private curso : string;

    constructor(codigo : number, nome : string, curso : string) {
        super(codigo, nome);
        this.curso = curso;
    }

    retornarDadosAluno() {
        return `codigo: ${this.codigoEstudante} | 
        nome: ${this.nomeEstudante} | 
        curso: ${this.curso}`;
    }
}

const estudante102 = new Pessoa101(1,'felipe','ads');
// console.log(estudante102.retornarDadosAluno());


//readonly

export {};

class Funcionario {
    readonly dateNascimento : Date;

    constructor(dataNascimento : Date) {
        this.dateNascimento = dataNascimento
    }
}

const funcionario = new Funcionario(new Date(1997,12,19));
// funcionario.dateNascimento = new Date(1997,12,19) error

//outra forma de utilizar readonly
class Funcionario01 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

class Funcionario02 {
    nome : string;
    readonly codigoFuncionario : number;

    constructor(nome : string, codigo : number) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}

const func = new Funcionario02('felipe',123);
func.nome = 'mario';
// func.codigoFuncionario = 50; ERR0R

//readonly with interface

interface IFuncionario {
    codigo : number;
    nome : string;
}

const funcionario03:Readonly<IFuncionario> = {
    codigo : 1,
    nome: 'mario',
}

// funcionario03.codigo = 23; error
// funcionario03.nome = 'felipe'; error

// acessando sem o readonly
const funcionario04: IFuncionario = {
    codigo : 1,
    nome: 'mario',
}

//get
class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}

// console.log(new Quadrado().calcularQuadrado);

//set
class Pessoa52 {
    nome : string;

    retornarNomePessoa(setNomePessoa : string) {
        this.nome = setNomePessoa;
    }
}

const pessoa1221 = new Pessoa52();
pessoa1221.retornarNomePessoa('felipe');
// console.log(pessoa1221.nome);


class Estudante123 {
    private _nome = 'felipe mateus';
    private _semestre : number;
    private _curso : string;

    get nomeEstudante () { return this._nome; }
}

const estudante12313 = new Estudante123();
const resultado213 = estudante12313.nomeEstudante;
// console.log(resultado213);


//set explicacao maior

class Estudante1245 {
     _nome: string;
     _semestre : number;
     _curso : string;

    constructor(nome : string, semestre : number, curso : string) {
        this._nome = nome;
        this._semestre  = semestre;
        this._curso = curso;
    }

    get cursos(){
        return this._curso;
    }

    set cursos(setCurso : string){
        this._curso = setCurso;
    }
}

const estudante54 = new Estudante1245('felipe',5,'ads');
console.log(estudante54)
estudante54._curso = 'sistema da informação';
console.log(estudante54);


































































































