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
// console.log(estudante54)
estudante54._curso = 'sistema da informação';
// console.log(estudante54);
//herança
class Animal01 {
    mover(distancia = 0) {
        console.log(`Animal se moveu...: ${distancia} mestros.`);
    }
}
class Cachorro extends Animal01 {
    latir() {
        console.log('Au, Au');
    }
}
const cao = new Cachorro();
// cao.mover(5);
// cao.latir();
//ex2
class Pessoa97 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        return `Meu nome é ${this.nome} ${this.sobrenome}.`;
    }
}
class Funcionario97 extends Pessoa97 {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    retornarNome02() {
        return super.apresentarPessoa() + `E, Sou ${this.funcao}.`;
    }
}
const func97 = new Funcionario97('felipe', 'mateus', 'ti');
/* console.log(func97.retornarNomeCompleto());
 console.log(func97.apresentarPessoa());
 console.log(func97.retornarNome02());*/
//STATIC
class Funcionario98 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario98.contratacoes++;
    }
}
Funcionario98.contratacoes = 0;
const func98 = new Funcionario98('felipe', 'mateus', 'dev');
const func99 = new Funcionario98('mario', 'mateus', 'prof');
// console.log(Funcionario98.contratacoes);
class Funcionario99 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario99.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario99.contratacoes;
    }
}
Funcionario99.contratacoes = 0;
const func999 = new Funcionario99('felipe', 'mateus', 'dev');
class Cachorro1 {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro1.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro1.QTD_CACHORRO_VENDIDO);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
Cachorro1.QTD_CACHORRO_VENDIDO = 0;
// const cao1 = new Cachorro1('bidu',9,['spitz']);
// const cao2 = new Cachorro1('guri',7,['buldogue']);
// cao1.exibirInformacao();
// cao2.exibirInformacao();
//CLASS ABSTRACTS
class Funcionario999 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retonarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retonarNomeCompleto} - Salario:  ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario999 {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario999 {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const felipe = new FuncionarioCLT('felipe', 'mateus', 15000);
const renata = new FuncionarioPJ('renata', 'martiz', 150, 150);
function exibirNome232(pessoa) {
    return `
    nome: ${pessoa.nome}
    sobrenome: ${pessoa.sobrenome}
    idade: ${pessoa.idade}`;
}
const felipe97 = {
    nome: 'felipe',
    sobrenome: 'mateus',
    idade: 26
};
const livro = {
    titulo: 'O senhor dos aneis',
    autor: 'romario biro'
};
const carro = {
    modelo: 'Fusca',
    ano: 1999,
};
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} de ${this.idade} anos está comendo ${tipoComida}`);
    }
}
const gato = new Gato('reiske', 3, true);
const cao121 = {
    nome: 'bidu',
    idade: 10,
    porte: 'medio',
    raca: 'lavrador'
};
const animal21 = {
    nome: 'bidu',
    idade: 10,
};
const desenvolvedor = {
    id: '1as1',
    nome: 'felipe',
    salario: 2600,
    linguagemProgramacao: 'php',
};
const dadosCliente = {
    conta: 123,
    agencia: 123123,
    banco: 'banco do brasil',
    nome: 'felipe',
    email: 'fe@gmail.com',
    cpf: 132132132,
};
function exibirTipo(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Argumentos invalidos');
}
// instanceof
class Carro2 {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto2 {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculos(veiculo) {
    if (veiculo instanceof Carro2) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto2) {
        return `O nome da mato é: ${veiculo.nome} e o ano é: ${veiculo.ano}`;
    }
}
const carro2 = new Carro2('gol', 'volksvagen');
const moto2 = new Moto2('CBR', 2020);
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} esta nadando...`);
}
function voar(grupo) {
    console.log(`O ${grupo} esta nadando...`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
// mover(new Peixe('peixe', 'azul'));
// mover(new Passaro('passaro', 'vermelho'));
//TYPE CASTING
const nome = 'felipe';
// console.log((nome as string).toUpperCase());
//segunda forma de usar o type casting
const carro1997 = 'corolla';
const tamanhoString = carro1997.length;
// console.log('o tamanho da string é:',tamanhoString);
//TYPE ASSERTION
function exibirPrecoFinal(preco, desconto, formato) {
    const precoComdesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComdesconto}` : precoComdesconto;
}
const descontoFinal = exibirPrecoFinal(100, 0.05, true);
const descontoFinal2 = exibirPrecoFinal(100, 0.05, false);
const humano97 = {
    idade: 26,
    idioma: 'portugues',
};
const enderecoPessoa = {
    enderecoSecundario: 'rua 2',
    cidade: 'itapeva',
    pais: 'brasil',
};
const enderecoEmpresa = {
    localizacao: 'avenida',
};
const arquivoAudio = 'mp4';
const usuarioMapped = {
    nome: 'felipe',
};
const artigo97 = {
    autor: 'dsa',
    titulo: 'dsada',
    preco: 100,
};
const livro97 = {
    autor: 'boris',
    numeroPaginas: 0,
    preco: 10,
    titulo: 'programm'
};
const pessoa97_97 = {
    localNascimento: 'São Paulo',
    residenciaAtual: { x: 10, y: 20 },
};
const config = {
    host: 'localhost',
    port: 5000,
    tryReconnect: () => true,
    poolSize: 10,
};
function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
/*
* GENERICS
* */
function retornarElementosRandomicos(items) {
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}
;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos(numeros);
// console.log(numerosRandomicos);
let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina'];
let estadosRandomicos = retornarElementosRandomicos(estados);
// console.log(estadosRandomicos);
function exibirElementos(array) {
    array.forEach(element => {
        console.log(element);
    });
}
let number = [1, 2, 3, 4, 5];
let state = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina'];
function obterPessoaIdadeMaiorQue(pessoas, idade) {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}
const pessoas1222 = [
    { nome: 'felipe', idade: 26 },
    { nome: 'mario', idade: 36 },
    { nome: 'regina', idade: 20 },
    { nome: 'aline', idade: 24 },
];
const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas1222, 25);
// console.log(pessoasComIdadeMaiorQue25);
function juntarObjetos(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}
const pessoaasd = juntarObjetos({ nome: 'felipe' }, { idade: 26 });
const pessoaasd2 = juntarObjetos({ nome: 'felipe' }, 36);
//maneira correta
function juntarObjetos2(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}
const pessoaasd3 = juntarObjetos2({ nome: 'felipe' }, { idade: 26 });
// errado
// function prop<T, K>(objeto: T, chave: K): T & K {
//     return objeto[chave];
// }
function prop2(objeto, chave) {
    return objeto[chave];
}
const psaas = prop2({ nome: 'felipe' }, 'nome');
// console.log(psaas);
/*
* GENERICS CLASS
* */
class Estudante2 {
    setValor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    retornarValor() {
        console.log(`id do estudante: ${this.id}, nome do estudante: ${this.nome}`);
    }
}
const est = new Estudante2();
const est2 = new Estudante2();
est.setValor(101, 'felipe');
// est.retornarValor();
est2.setValor('das', 'renato');
async function fetchJson(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJson('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(response.data);
})();
/*
* MODULES
* */
