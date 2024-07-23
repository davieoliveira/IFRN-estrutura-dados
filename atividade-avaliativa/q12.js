/*  
* Questão 12) Escreva uma função que receba dois arrays e retorne um novo array contendo 
* os elementos comuns aos dois arrays, sem duplicatas.
*/
function similarElements(array1, array2) {
    let newArray = [];

    for(let x = 0 ; array1.length > x ; x++){
        for(let y = 0 ; array2.length > y ; y++){
            // Verificando se o array é igual ao outro, comparando um a um.
            if(array1[x] == array2[y]) {
                // Verificando se o valor está incluso no array 
                if(!newArray.includes(array1[x])) {
                    newArray.push(array1[x]);
                }
            }
        }
    }
    console.log(newArray)
}

array1 = [1, 2, 3, 4];
array2 = [4, 6, 7, 2 , 2];
similarElements(array1, array2)
