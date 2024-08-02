/**
 * Encontra o elemento mais frequente em um array.
 *
 * @param {number[]} array - Um array de números.
 * @returns {number} O elemento mais frequente no array.
 *
 * @example
 *
 * const array = [1, 2, 2, 3, 3, 3, 4];
 * console.log(elementosMaisRepetido(array));
 * // Saída: 3
 */

export default function elementosMaisRepetido(array) {
    let contador = 0;
    let maiorContagem = 0;
    let indice = 0;
    
    for(let x = 0 ; array.length > x ; x++){
        contador = 0;
        for(let y = 0 ; array.length > y ; y++) {
            if(array[x] == array[y]) {
                contador += 1;
                if(contador > maiorContagem) {
                    maiorContagem = contador;
                    indice = x;
                }
            }
        }
    }
    return array[indice];
}
