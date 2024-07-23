/** 
 * 14. Escreva uma função que encontre o segundo maior número em um array de
 * números.
*/
function secondLargestNumber(array){
    let largestNumber = -10000000000000000000000000;
    let secondLargestNumber = -1000000000000000000000;

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

    console.log('o maior número é ' + largestNumber);
    console.log('O segundo maior número é ' + secondLargestNumber);
    }

array = [1, 2, 3, 4, 5, 6, 7, 8, 2000]
secondLargestNumber(array)

