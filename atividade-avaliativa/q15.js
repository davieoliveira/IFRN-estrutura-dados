/**
 * 15. Escreva uma função que receba um array e um número alvo, e retorne todos os
 * pares de elementos do array cuja soma seja igual ao número alvo. 
 */
function retornarSoma(array, number) {
    let newArray = [];
    for(let x = 0 ; array.length > x ; x++) {
        for(let y = 0 ; array.length > y ; y++) {
            if(array[x] + array[y] == number && y != x) {
                newArray.push([array[x], array[y]]);
            }
        }
    }
    console.log(newArray);
}
array = [2, 2, 2, 2, 10, 10, 1, 3];
retornarSoma(array, 4);
