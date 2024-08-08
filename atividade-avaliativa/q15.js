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
 * const array = [2, 2, 3, 1];
 * console.log(parDeSoma(array, 4));
 * // Saída: [ [ 2, 2 ], [ 1, 3 ] ]
 */
export default function parDeSoma(array, numero) {
    let novoArray = [];
    for (let x = 0; x < array.length; x++) {
        for (let y = x + 1; y < array.length; y++) {
            if (array[x] + array[y] == numero) {
    
                if (!novoArray.some(par => (par[0] === array[x] && par[1] === array[y]) || (par[0] === array[y] && par[1] === array[x]))) {
                    novoArray.push([array[x], array[y]]);
                }
            }
        }
    }
    return novoArray;
}
