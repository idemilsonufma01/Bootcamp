
function comparaNumber(num1, num2){
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);
    if (!num1 || !num2  ){
        return "Defina os numeros diferente de zero ou nulo";
    } 

    return `${primeiraFrase} ${segundaFrase}`;
}


function criarPrimeiraFrase(num1,num2){
    let iguais = '';

    if (num1 !== num2){
        iguais = 'não';
    }

    return `Os numeros ${num1} e ${num2} ${iguais} são iguais.`
};

function criarSegundaFrase(num1,num2){
    
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (compara10){
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumber(-2,-4));

