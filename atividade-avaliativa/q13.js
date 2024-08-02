/**
 * Recebe dois arrays e retorna um novo array contendo todos os elementos dos dois arrays, sem duplicatas.
 *
 * @param {Array} array1 - O primeiro array.
 * @param {Array} array2 - O segundo array.
 * @returns {Array} Um novo array contendo todos os elementos dos dois arrays sem duplicatas.
 *
 * @example
 *
 * const array1 = [1, 2, 3, 4];
 * const array2 = [4, 6, 7, 2, 2];
 * console.log(groupElements(array1, array2));
 * // Saída: [1, 2, 3, 4, 6, 7]
 */
export default function arraySemDuplicatas(array1, array2) {
    let newArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (!newArray.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    }

    for (let j = 0; j < array2.length; j++) {
        if (!newArray.includes(array2[j])) {
            newArray.push(array2[j]);
        }
    }
    return newArray;
}