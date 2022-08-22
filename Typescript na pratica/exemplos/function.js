"use strict";
function printaValorNumerico(num1, num2) {
    /*tipo void não retorna nada, como se tivesse um console */
    console.log(num1 + num2);
}
function somarValorNumerico(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somarValorNumerico(1, 3, aoQuadrado));
console.log(somarValorNumerico(1, 3, dividirPorEleMesmo));
