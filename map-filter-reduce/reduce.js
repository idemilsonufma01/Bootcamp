/*
function somaNumeros(arr){
    return arr.reduce (function (prev,current){
        return prev + current;
    },0);
}


const number = [1,2,4];

console.log(somaNumeros(number));

*/

const lista = [
    {
        name: 'sabao em pó',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

saldoDisponivel = 100;


function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        console.log('rodada',index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}



console.log(calculaSaldo(saldoDisponivel,lista));