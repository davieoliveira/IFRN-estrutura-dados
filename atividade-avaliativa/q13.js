/*
* Questão 13. Escreva uma função que receba dois arrays e retorne um novo array 
* contendo todos os elementos dos dois arrays, sem duplicatas.
*/
function groupElements(array1, array2) {
    let newArray = [];

    for(let x = 0 ; array1.length > x ; x++){

        if(!newArray.includes(array1[x])) {
            newArray.push(array1[x]);
        }
        if(!newArray.includes(array2[x])) {
            newArray.push(array2[x]);
        }
    }
    console.log(newArray)
}

array1 = [1, 2, 3, 4];
array2 = [4, 6, 7, 2 , 2];
groupElements(array1, array2)

