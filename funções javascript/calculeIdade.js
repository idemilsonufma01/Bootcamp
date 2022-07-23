const pessoa1 =
    {
        nome: 'João',
        idade: 18,
        
    };

const pessoa2 = 
    {
        nome: 'Paulo',
        idade: 17,
    };
const pessoa3 =  {
        nome: 'Lucas',
        idade: 13,
    };

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(pessoa1,5))
console.log(calculaIdade.apply(pessoa1,[5]))
