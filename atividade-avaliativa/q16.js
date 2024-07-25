// 16. Escreva uma função que encontre o elemento mais frequente em um array.
function mostRepeatedElement(array) {
    let count = 0;
    let highestCount = 0;
    let index = 0;
    
    for(let x = 0 ; array.length > x ; x++){
        for(let y = 0 ; array.length > y ; y++) {
            if(array[x] == array[y]) {
                count += 1;
                if(count > highestCount) {
                    highestCount = count;
                    index = x;
                }
            }
        }
    }

    return array[index];
}
