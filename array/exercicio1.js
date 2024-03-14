/**
 * Crie uma classe JS para implementar um array com cinco métodos básicos: 
 * inserirFinal, inserirInicio, retirarInicio e retirarFinal. Não utilize 
 * os métodos push, pop, shift e unshift.
 */

class Alunos {
    constructor() {
        this.listaAlunos = ["Paulo o Unico", "Helliel Fuzileiro", "Erick meu Prefeito"];
    }

    exibirLista() {
        console.log(this.listaAlunos);
    }

    inserirInicio(novoAluno) {
        let novaLista = [novoAluno];
        for(let i = 0; i < this.listaAlunos.length; i++ ){
            novaLista[i+1] = this.listaAlunos[i];
        }
        this.listaAlunos = novaLista;
        }
    
    removerInicio(){
        let novaLista = [];
        for(let i = 0; i < this.listaAlunos.length - 1; i++ ) {
            novaLista[i] = this.listaAlunos[i+1];
        }
        this.listaAlunos = novaLista;
    }

    inserirFinal(novoAluno){
        let novaLista = [];
        for (let i = 0; i < this.listaAlunos.length; i++) {
            novaLista[i] = this.listaAlunos[i];
        }
        novaLista[novaLista.length] = novoAluno;
        this.listaAlunos = novaLista;
    }

    removerFinal(){
        let novaLista = [];
        for(let i = 0; i < this.listaAlunos.length - 1; i++) {
            novaLista[i] = this.listaAlunos[i]
        }
        this.listaAlunos = novaLista;
    }
}

let listaAlunos = new Alunos(); 
listaAlunos.exibirLista()
listaAlunos.removerFinal()
listaAlunos.exibirLista()