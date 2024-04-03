class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor(){
        this.cabeca = null;
    }

    inserirInicio(valor){
        let no = new No(valor);
        no.proximo = this.cabeca;
        this.cabeca = no;
    }
    inserirFim(valor){

    }
    estaVazio(){

    }
    tamanho(){

    }
    valorIndice(indice){
       
    }
    contem(valor){

    }

    paraArray(){
        let array = [];        
        if (this.cabeca == null)
            return array;        
        let no = this.cabeca;
        array.push(no.valor);
        while (no.proximo != null){            
            no = no.proximo;
            array.push(no.valor);
        }        
        return array;
    }
}

const lista = new ListaEncadeada();
lista.inserirInicio(5);
lista.inserirInicio(3);
lista.inserirInicio(7);
console.log(lista.paraArray());