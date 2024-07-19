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

console.log(pessoa);