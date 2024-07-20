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

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluida!');
}

