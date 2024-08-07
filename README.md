# study-on-typescript

# tsconfig.json

![img.png](img/img.png)

### include
<p>o include é as pastas onde o tsc deve procurar para encontrar seus arquivos typescript</p>

### lib
<p>representa que tipo que o tsc deve executar seu codigo</p>

### molude
<p>para qual sistema de module que o tsc deve compilar o seu codigo</p>

## hello world

````typescript

let mensagem: string = 'hello world';// definindo a variavel e o tipo dela

console.log(mensagem);
````

## utilizando function e chamando-a

````typescript
function addnumber(numb1 : number, numb2 : number)
{
    return numb1 + numb2;
}
console.log(addnumber(1,1));
````

### typeof

<p> para saber que tipo de dados está querendo saber</p>

````ts
console.log('HEXADECIMAL...:', typeof (numb2));
````

![img_3.png](img/img_3.png)

## Exemplos de como usar number em ts

````ts
let numb1:number = 23.0;
let numb2:number = 0x78CF;
let numb3:number = 0o577;
let numb4:number = 0b110001;

console.log('NUMBER - Ponto Flutuante...:', numb1);
console.log('HEXADECIMAL...:', numb2);
console.log('OCTAL...:', numb3);
console.log('BINARIO...:', numb4);
````

### Saida

![img_2.png](img/img_2.png)

## BIGINT

![img_1.png](img/img_1.png)

<p>para sinalizar que é um numero grande, todo final do conteudo vai um (n) para indicar que é um bigint</p>

````ts
let numbBig1:bigint = 9007199254740991n;
let numbBig2:bigint = 0x78CFn;
let numbBig3:bigint = 0o577n;
let numbBig4:bigint = 0b110001n;

console.log('NUMBER - Ponto Flutuante...:', numbBig1);
console.log('HEXADECIMAL...:', numbBig2);
console.log('OCTAL...:', numbBig3);
console.log('BINARIO...:', numbBig4);
````

![img_4.png](img/img_4.png)

<p>bigInt é diferente de number, eles sao tipos primitios que lidam com numeros 
completamentes distintos, por exemplo se for uma aplicação que lida com valores
você irá utilizar o bigInt, e se não for numeros não tão expressivos você irá
utilizar o number</p>

## UTILIZANDO STRING 

````ts
let nomePessoa : string = 'felipe';
let nomecompleto : string = `Seja bem vindo ${nomePessoa}`;
console.log(nomecompleto);
````

![img_5.png](img/img_5.png)

![img_6.png](img/img_6.png)

## UTILIZANDO ARRAY'S

````ts
let frutas:Array<string> = ['maça','banana','abacaxi'];

console.log(frutas);
````


![img_7.png](img/img_7.png)

### push

<p>ele inseri um novo elemento no fim da array</p>

````ts
let idiomas: Array<string> = ['portugues','ingles','espanhol','frances'];

idiomas.push('mandarim');

console.log(idiomas);
````

![img_8.png](img/img_8.png)

### VER O TAMANHO DA ARRAY

````ts
let idiomas: Array<string> = ['portugues','ingles','espanhol','frances'];

console.log(idiomas.length);
````

![img_9.png](img/img_9.png)

### spread operator

````ts
let listaNumeros: Array<number> = [0,1,2,3,4,5];
listaNumeros = [...listaNumeros,6,7,8,9];
````

![img_10.png](img/img_10.png)

## UTILIZANDO FUNCTION E FOR

````ts
let linguagem: Array<string> = ['python','php','ts','c#'];

function funcaoLinguagem(linguagens:Array<string>) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}

funcaoLinguagem(linguagem);
````
![img_11.png](img/img_11.png)

## UTILIZANDO TUPLAS

````ts
let pessoa1: [string, string, number];
pessoa1 = ['felipe', 'mateus', 26];
console.log(pessoa1);
````

![img_12.png](img/img_12.png)

## TUPLAS COM LABELS

````ts
let pessoa1: [nome:string, sobrenome:string, idade:number] = ['felipe', 'mateus', 26];
````

![img_16.png](img/img_16.png)

## SPREAD OPERATOR COM TUPLAS

````ts
let listaFrutas: [string, ...string[]] = ['maça','banana','abacaxi'];
console.log(...listaFrutas);
````

![img_13.png](img/img_13.png)

## TUPLAS COM FUNÇÕES

````ts
function listarPessoas(nomes: string[],idades:number[]):(string | number)[] {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['felipe','regina'],[26,19]);

console.log(resultado);
````

![img_17.png](img/img_17.png)

## LABELED TUPLES COM SPREAD OPERATOR NUMA FUNÇÃO

````ts
type Nome = | [primeiroNome: string, sobrenome:string]
    | [primeiroNome: string, nomeMeio:string ,sobrenome:string];

function criarPessoa(...nome:Nome){
    return [...nome];
}

console.log(criarPessoa('felipe','mateus'));
````

![img_18.png](img/img_18.png)

## ENUMS

![img_19.png](img/img_19.png)

````ts
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances
}
console.log(Idioma);
````

![img_20.png](img/img_20.png)

````ts
enum Idioma {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Ingles = 'EN',
    Frances = 'FR'
}
console.log(Idioma.Portugues);
````

![img_21.png](img/img_21.png)

### EXEMPLO 2

````ts
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

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluida!');
}
````
![img_22.png](img/img_22.png)

## ANY EM TS

![img_23.png](img/img_23.png)

<p>o certo é saber quando usar o any, ao utilizar ele de qualquer jeito pode acontecer varios poblemas
como este no exemplo acima, quando voce não coloca um tipo para sua variavel, ele vai vir como padrão any</p>

````ts
const formulario: {[campoFormulario:string]:any} = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26,
}

console.log(formulario.campoFormulario);
````
![img_24.png](img/img_24.png)

## unknown

<p>Se não souber qual tipo colocar o melhor 
é colocar unknown</p>

![img_26.png](img/img_26.png)

![img_27.png](img/img_27.png)

<p>nunca atribua o valor unknown algo que ja tem uma inferencia de outro tipo </p> 

<p>isso pode dar erro. exemplo abaixo</p>

````ts
let valor: unknown;

let valor1: boolean = valor;

console.log(valor1);

````

![img_28.png](img/img_28.png)

### diferença entre unknown e any

````ts
let algumacoisaAny: any;
let algumacoisaUnknown: unknown;

console.log(algumacoisaAny.toFixed(2));
console.log(algumacoisaUnknown.toFixed(2));
````

<p>Como mostrado na imagem abaixo somente o unknown esta mostrando que contem erro, 
ja o any não, por que ele nao vai te mostrar um erro em tempo de execução</p>

![img_29.png](img/img_29.png)

## VOID EM TS

![img_30.png](img/img_30.png)

### exemplos

![img_31.png](img/img_31.png)

````ts
function logError(errorMessage:string) {
    console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - name!');

// segunda forma
const logErrorExample2 = (errorMessage : string) => {
    console.log(errorMessage);
}
logErrorExample2('Required field - SurName!');
````

![img_32.png](img/img_32.png)

### uso do void em variaveis

<p>quando desativamos o strictNullChecks podemos 
fazer atribuições de variaveis em um valor null em um tipo void</p>

![img_33.png](img/img_33.png)

````ts
let variavelExemploVoid: void;
variavelExemploVoid = 1; //error
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
````

## NULL E UNDEFINED EM TS

### NULL
![img_34.png](img/img_34.png)

### UNDEFINED
![img_35.png](img/img_35.png)

### DIFERENÇA ENTRE ELES

![img_36.png](img/img_36.png)

#### null

````ts
let variavelTestNull = null;
console.log(variavelTestNull);
console.log(typeof variavelTestNull);
````
![img_37.png](img/img_37.png)

#### undefined

````ts
let variavelTesteUndefied;
console.log(variavelTesteUndefied);
console.log(typeof variavelTesteUndefied);
````
![img_38.png](img/img_38.png)

#### diferença entre os 2

````ts
// == compara resultado, === compara valor e o tipo
// console.log('exemplo 1:', null == undefined);
// console.log('exemplo 2:', null === undefined);
````
![img_39.png](img/img_39.png)

## NEVER EM TS

![img_40.png](img/img_40.png)

````ts
function error(message:string) : never {
    throw new Error(message);
}
console.log(error('erro de mensagem'));

function rejectMessage() : never {
    return error('Error de mensagem - 02');
}

console.log(rejectMessage());

const loopInfinity = function loop(){
    while (true){
        console.log('oi');
    }
};

console.log(loopInfinity());
````

## OBJECT EM TS

![img_41.png](img/img_41.png)

````ts
const pessoa12 = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26,
    funcao: 'developer php',
}

function onboarding01(funcionario: { nome:string }) : string {
    return 'seja bem vindo ' + funcionario.nome;
}

console.log(onboarding01({nome:' felipe mateus'}));
````

![img_42.png](img/img_42.png)

#### utilizando interface com Objeto

````ts
interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa:Pessoa): string {
    return (
        'Seja bem vindo: ' + pessoa.nome + ' sua funcao aqui na empresa sera: ' + pessoa.funcao
    )
}

console.log(onboarding02({nome: 'felipe',funcao:'developer php'}));
````
![img_43.png](img/img_43.png)

#### utilizando type com Object

````ts
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

console.log(onboarding03({nome: 'felipe',funcao:'developer php', linguagem:'php'}));
````
![img_44.png](img/img_44.png)

#### propriedade opcional (?:)

````ts
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

console.log(onboarding04({nome: 'felipe',funcao:'developer php', 
    linguagem:'php',email:'dsadas'}));
````

## HERANÇAS EM TYPESCRIPT

````ts
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

console.log(filho);
````

![img_45.png](img/img_45.png)

## GENERICS IN TS

````ts
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

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
````

![img_46.png](img/img_46.png)

## IF IN TS

````ts
let desconto : number;
let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5 ){
    desconto = 5;
}else if (valorCompra > 5 && valorCompra <= 10){
    desconto = 10;
}else {
    desconto = 15;
}
````

![img_47.png](img/img_47.png)

### ternario

````ts
const podeVotar = (idadeVotacao >= 18)
    ? 'voce é elegivel para votar'
    : 'voce nao é elegivel para votar'

console.log(podeVotar);
````

![img_48.png](img/img_48.png)

## FUNCTIONS IN TS

````ts
function somarNumeros(number1: number, number2: number) : number{
    return number1 + number2;
}
````

![img_49.png](img/img_49.png)

#### FUNCTION ANONIMO

````ts
const saudar = function (mensagem: string) : string{
    return mensagem;
};
````
![img_50.png](img/img_50.png)

#### FUNCTION ARROW 

````ts
const saudar02 = (mensagem : string) : string =>{
    return mensagem;
}
````
![img_51.png](img/img_51.png)

#### FUNCTION CONSTRUCTOR

````ts
const saudar03 = new Function('mensagem', 'return "Fala " + mensagem');
````

![img_52.png](img/img_52.png)

## OPTIONAL PARAMETERS IN TS

````ts
function informarDadosPessoas(idPessoa: number, nome: string, email?:string) : void{
    if (email != undefined){
        console.log('Id Funcionario: ', idPessoa, 'Nome: ', nome,
            'Email: ', email);
        return;
    }
    console.log('Id Funcionario: ', idPessoa,'Nome: ', nome);
}

informarDadosPessoas(1,'Felipe',);
informarDadosPessoas(2,'gilmara','gilmara@gmail.com');
````

![img_53.png](img/img_53.png)

````ts
function mensagemLog(mensagem : string, usuarioId ?: number) : void{
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuario(a) não conectado(a)');
}

mensagemLog('atualizar pagina');
mensagemLog('usuario logado com sucesso!!',778811);
````

![img_54.png](img/img_54.png)

````ts
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

console.log(pessoa15);
````

![img_55.png](img/img_55.png)

## DEFAULT PARAMETERS

````ts
function exibirMensagem(mensagem : string, saudar = 'fala pessoal') : string {
    return saudar + ' ' + mensagem + '!';
}
````
![img_56.png](img/img_56.png)

## REST PARAMETERS

````ts
function somarNumeros2(...numeros : number[]){
    let total = 0;
    numeros.forEach((numero : number) => (total += numero));
    return total;
}

console.log(somarNumeros2(1,2,3));
````
![img_57.png](img/img_57.png)

````ts
function listarFrutas(frase : string, ...frutas : string[]){
    return frase + ' ' + frutas.join(', ');
}
````

![img_58.png](img/img_58.png)

### with class

````ts
class Produtos{
    public exibirProdutos(...produtos : string[]):void{
        for(const produto of produtos){
            console.log(produto);
        }
    }
}

const departamentoInformatica : Produtos = new Produtos();
console.log('todos os produtos do departamento de informatica disponivel no estoque...:');

departamentoInformatica.exibirProdutos('mouse', 'notebook', 'usb', 'teclado', 'webcam');
````


![img_59.png](img/img_59.png)

## Class in ts

````ts
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

estudante1. listarEstudante();
````

![img_60.png](img/img_60.png)

### not constructor

````ts
class Estudante{
    codigoEstudante : number;
    nome : string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 123;
estudante.nome = 'felipe';

console.log('codigo do estudante: ' + estudante.codigoEstudante);
console.log('nome do estudante: ' + estudante.nome);
````

![img_61.png](img/img_61.png)

## MODIFICADORES DE ACESSO

#### private
````ts
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

console.log(estudante52.retornarDadosEstudantes());
````
![img_62.png](img/img_62.png)

#### protected

````ts
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
console.log(estudante102.retornarDadosAluno());
````
![img_63.png](img/img_63.png)

## readonly in ts

````ts
class Funcionario {
    readonly dateNascimento : Date;

    constructor(dataNascimento : Date) {
        this.dateNascimento = dataNascimento
    }
}

const funcionario = new Funcionario(new Date(1997,12,19));
// funcionario.dateNascimento = new Date(1997,12,19) error
````
#### outra forma de utilizar o readonly

````ts
class Funcionario01 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}
````
## readonly with interface 

````ts
interface IFuncionario {
    codigo : number;
    nome : string;
}

const funcionario03:Readonly<IFuncionario> = {
    codigo : 1,
    nome: 'mario',
}

funcionario03.codigo = 23;
funcionario03.nome = 'felipe';

// acessando sem o readonly
const funcionario04: IFuncionario = {
    codigo : 1,
    nome: 'mario',
}
````

## GET AND SET IN TS

````ts
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
````

![img_64.png](img/img_64.png)


















