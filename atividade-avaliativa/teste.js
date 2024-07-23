let array = [10, 2, 1, 1, 3, 5, 10, 1, 1];

// Deixando os arrays em ordem crescente
array.sort((a, b) => a - b);
let maiorRepeticao = 0;
let contador = 0;
let numero = 0;

for(let x = 0 ; array.length > x ; x++) {
    if(array[x] == array[x+1]){
        contador += 1;
    }
    
    else{
        if(contador > maiorRepeticao) {
            maiorRepeticao = contador;
            numero = array[x];
        } 
    }
}

console.log(numero);