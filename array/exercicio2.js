/**
 * Escreva um algoritmo que inverta os elementos de um array sem usar um array auxiliar.
 */
let array = [1,2,3,4,5,6,7];
console.log(array);
let fim = array.length - 1;
for(let inicio = 0; inicio < fim; inicio++) {
    variavelAuxiliar = array[inicio];
    array[inicio] = array[fim];
    array[fim] = variavelAuxiliar;
    fim -= 1
}
console.log(array);
