/**
 * Essa função recebe um número alvo e em seguida, retorna todas todos os
 * pares de elementos do array cuja soma seja igual ao número alvo.
 *
 * @param {number[]} array - Um array de números.
 * @param {number} numero - um número alvo
 *
 * @returns {number[][]} Um array de pares de elementos cuja soma é igual ao número alvo.
 *
 * @example
 *
 * const array = [2, 2, 3, 1]; => [3, 1] = [1, 3]
 * console.log(parDeSoma(array, 4));
 * // Saída: [ [ 2, 2 ], [ 2, 2 ], [ 3, 1 ], [ 1, 3 ] ]
 */
function parDeSoma(array, numero) {
  let finalArr = [];

  for (let x = 0; x < array.length; x++) {
    for (let y = x + 1; y < array.length; y++) {
      if (array[x] + array[y] == numero) {
        const pair = [array[x], array[y]].sort();

        if (
          !finalArr.find((item) => item[0] === pair[0] && item[1] === pair[1])
        ) {
          finalArr.push(pair);
        }
      }
    }
  }

  return finalArr;
}
