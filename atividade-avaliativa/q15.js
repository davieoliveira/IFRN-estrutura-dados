/**
 * 15. Escreva uma função que receba um array e um número alvo, e retorne todos os
 * pares de elementos do array cuja soma seja igual ao número alvo. 
 */

function somados(array, numeroAlvo) {
    let somas = [] 
    for(let x = 0 ; array.length > x ; x++) {
        for(let y = 0 ; array.length > y ; y++){
            if(array[x] + array[y] == numeroAlvo){
                somas.push('A soma do número ' + array[x] + ' + ' + array[y] + ' = ' + numeroAlvo)
            }
        }
    }  
    console.log(somas)
}

array = [6, 4, 5, 5];
somados(array, 10)
