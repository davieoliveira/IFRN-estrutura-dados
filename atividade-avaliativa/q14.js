/**
 * Encontra o segundo maior número em um array de números.
 *
 * @param {number[]} array - Um array de números.
 * @returns {number} O segundo maior número no array.
 *
 * @example
 *
 * const array = [1, 2, 3, 4, 5];
 * console.log(secondLargestNumber(array));
 * // Saída: 4
 */
export default function segundoMaiorNumero(array){
    let maiorNumero = array[0];
    let segundoMaiorNumero = array[0];

    for(let x = 0 ; array.length > x ; x++) {
        if(array[x] > maiorNumero){
            maiorNumero = array[x];
        }
    }
    for(let x = 0 ; array.length > x ; x++) {
        if(array[x] > segundoMaiorNumero) {
            if(array[x] != maiorNumero){
                segundoMaiorNumero = array[x];
            }
        }
    } 
    return segundoMaiorNumero;
    }