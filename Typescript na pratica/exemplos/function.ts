function printaValorNumerico(num1: number, num2: number): void {
  /*tipo void não retorna nada, como se tivesse um console */
  console.log(num1 + num2);
}

function somarValorNumerico(
  num1: number,
  num2: number,
  callback: (num: number) => number
): number {
  let resultado = num1 + num2;
  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function dividirPorEleMesmo(num: number): number {
  return num / num;
}

console.log(somarValorNumerico(1, 3, aoQuadrado));
console.log(somarValorNumerico(1, 3, dividirPorEleMesmo));
