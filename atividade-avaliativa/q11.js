class Nó {
    constructor(valor) {
      this.valor = valor
      this.proximo = null
      this.anterior = null
    }
  }
  
  class ListaDuplamenteEncadeada {
    constructor() {
      this.cabeça = null
      this.cauda = null
    }
  
    adicionaCabeça(valor) {
      /* Adiciona um elemento ao início da lista */
      const newNó = new Nó(valor)
      if (!this.cabeça) {
        this.cabeça = newNó
        this.cauda = newNó
      } else {
        newNó.proximo = this.cabeça
        this.cabeça.anterior = newNó
        this.cabeça = newNó
      }
    }
  
    adicionaCauda(valor) {
      /* Adiciona um elemento ao final da lista */
      const newNó = new Nó(valor)
      if (!this.cauda) {
        this.cabeça = newNó
        this.cauda = newNó
      } else {
        newNó.anterior = this.cauda
        this.cauda.proximo = newNó
        this.cauda = newNó
      }
    }
  
    removeCabeça() {
      /* Remove o elemento do início da lista */
      if (this.cabeça) {
        this.cabeça = this.cabeça.proximo
        if (this.cabeça) {
          this.cabeça.anterior = null
        } else {
          this.cauda = null
        }
      }
    }
  
    removeCauda() {
      /* Remove o elemento do final da lista */
      if (this.cauda) {
        this.cauda = this.cauda.anterior
        if (this.cauda) {
          this.cauda.proximo = null
        } else {
          this.cabeça = null
        }
      }
    }
  
    busca(valor) {
      /* Busca um elemento por valor e retorna true se encontrado */
      let current = this.cabeça
      while (current) {
        if (current.valor === valor) {
          return true
        }
        current = current.proximo
      }
      return false
    }
  
    exibeCabeçaToCauda() {
      /* Exibe todos os elementos da lista da cabeça para a cauda */
      const elementos = []
      let current = this.cabeça
      while (current) {
        elementos.push(current.valor)
        current = current.proximo
      }
      console.log(elementos.join(" -> "))
    }
  
    exibeCaudaToCabeça() {
      /* Exibe todos os elementos da lista da cauda para a cabeça */
      const elementos = []
      let current = this.cauda
      while (current) {
        elementos.push(current.valor)
        current = current.anterior
      }
      console.log(elementos.join(" -> "))
    }
  }
  
  /*Simulação*/
  const lista = new ListaDuplamenteEncadeada()
  
  /*Adiciona elementos ao início e ao final da lista*/
  lista.adicionaCabeça(1)
  lista.adicionaCauda(2)
  lista.adicionaCabeça(0)
  lista.adicionaCauda(3)
  lista.exibeCabeçaToCauda()
  lista.exibeCaudaToCabeça()
  
  /*Remove elementos do início e do final da lista*/
  lista.removeCabeça()
  lista.removeCauda()
  lista.exibeCabeçaToCauda()
  lista.exibeCaudaToCabeça()
  
  /*Busca elemento*/
  console.log(lista.busca(2))
  console.log(lista.busca(4)) 
  
  /*Adiciona mais elementos*/
  lista.adicionaCabeça(-1)
  lista.adicionaCauda(4)
  lista.exibeCabeçaToCauda()
  lista.exibeCaudaToCabeça()