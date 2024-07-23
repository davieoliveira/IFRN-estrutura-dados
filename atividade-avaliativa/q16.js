// 16. Escreva uma função que encontre o elemento mais frequente em um array.
function mostRepeated(array){
    let repeat = 0;
    let position = 0;
    let count = 0;

    for(let x = 0 ; array.length > x ; x++) {
        for(let y = 0 ; array.length > y ; y++) {
            
            let count = 0;
            
            if(array[x] == array[y]) {
                count += 1;
            }
        }
        if(count > repeat) {
            repeat = count;
            position = array[x];
        }
        count = 0
    }
    console.log(array[position]);
}
let array = [10, 1, 2, 4, 5, 1, 5, 5, 5, 5, 5];
mostRepeated(array);