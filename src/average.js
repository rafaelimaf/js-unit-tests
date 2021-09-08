/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numbers) => {
  let sum = 0;
  let numAverage = 0;
  
  if (numbers === 0) {
    return undefined;
  }
  
  for (let i = 0; i < numbers.length; i += 1) {
     if (typeof numbers[i] !== 'number') {
       return undefined;
     }
     sum += numbers[i];
  }

  numAverage = sum / numbers.length;
  let newNumAverage = Math.round(numAverage);
  return newNumAverage;
};
console.log(average([5, 0.45, 3.75]));
module.exports = average;
