/**
 * Dado um array de tamanho n, encontre o elemento que aparece mais de n/2 vezes. O array é não
 * vazio e o elemento de maioria sempre existe no array.
 */
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let numerosIguais = 0;
array.  sort((a, b) => {

    if (a < b) return -1;
    if (a > b) return 1;

    return array.indexOf(a) - array.indexOf(b);
});

for(let i = 0; i < array.length - 1;i++) {
    let proxValor = array[i+1];
    if(array[i] == proxValor){
        numerosIguais += 1
    }

}
console.log(array); 
console.log(numerosIguais);