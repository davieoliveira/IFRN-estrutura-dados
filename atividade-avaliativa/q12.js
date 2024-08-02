/**
 * Retorna um array contendo os elementos que são comuns entre dois arrays fornecidos.
 * Os elementos no array de resultado são únicos, ou seja, não há duplicatas.
 *
 * @param {Array} array1 - O primeiro array para comparação. Pode conter qualquer tipo de valor.
 * @param {Array} array2 - O segundo array para comparação. Pode conter qualquer tipo de valor.
 * @returns {Array} Um array com os elementos que estão presentes em ambos os arrays fornecidos.
 *
 * @example
 *
 * // Exemplo: Arrays com elementos comuns
 * const array1 = [1, 2, 3, 4, 5];
 * const array2 = [4, 5, 6, 7, 8];
 * console.log(similarElements(array1, array2));
 * // Saída: [4, 5]
 */

export default function elementosSimilares(array1, array2) {
    let novoArray = [];

    for(let x = 0 ; array1.length > x ; x++){
        for(let y = 0 ; array2.length > y ; y++){
            if(array1[x] == array2[y]) {
                if(!novoArray.includes(array1[x])) {
                    novoArray.push(array1[x]);
                }
            }
        }
    }
    return novoArray;
}
