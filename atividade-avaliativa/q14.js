/** 
 * 14. Escreva uma função que encontre o segundo maior número em um array de
 * números.
*/
function secondLargestNumber(array){
    let largestNumber = array[0];
    let secondLargestNumber = array[0];

    // Achando o primeiro maior valor
    for(let x = 0 ; array.length > x ; x++) {
        if(array[x] > largestNumber){
            largestNumber = array[x];
        }
    }
    // Achando o segundo maior valor
    for(let x = 0 ; array.length > x ; x++) {
        if(array[x] > secondLargestNumber) {
            if(array[x] != largestNumber){
                secondLargestNumber = array[x];
            }
        }
    } 
    return secondLargestNumber;
    }

array = [1, 2, 3, 4, 5, 6, 7, 8, 2000, 2001];
console.log(secondLargestNumber(array));

