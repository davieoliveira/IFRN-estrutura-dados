/**
 * Dado um array de tamanho n, encontre o elemento que aparece mais de n/2 vezes. O array é não
 * vazio e o elemento de maioria sempre existe no array.
 */
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

arr.sort((a, b) => {

    if (a < b) return -1;
    if (a > b) return 1;

    return arr.indexOf(a) - arr.indexOf(b);
});

console.log(arr); 