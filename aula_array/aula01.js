const alunosTsi = ['Daniel', 'Bruna', 'Rita', 'Klyngher', 'Amanda', 'Vitor', 'Thiago', 'Matheus', 'Abner', 'Alycson', 'Janini']
console.log(alunosTsi)

// Adicionando elementos no final Array (push)
const tamanho = alunosTsi.push()
alunosTsi.push('Aristides')
console.log(alunosTsi)
console.log(tamanho)

// Adicionando elementos no começo do Array
alunosTsi.unshift('Paulo')
alunosTsi.unshift('Augusto')
alunosTsi.unshift('Marcos')
alunosTsi.unshift('Procopio')
console.log(alunosTsi)

// Removendo um elemento no final do array
const ultimoAluno = alunosTsi.pop()
alunosTsi.pop(alunosTsi)
console.log(ultimoAluno)
console.log(alunosTsi)

// Removendo elementos no começo do array
const ultimoElemento = alunosTsi.shift() // Vai remover e devolver para variavel o primeiro elemento.
console.log(alunosTsi)

// Pesquisa um elemento dentro do nosso array (includes) -> Retorno boolean
const inclui = alunosTsi.includes("Marcos")
console.log(inclui)

// Pesquisa e retorna o index do elemento procurado indexof
const indice = alunosTsi.indexOf("Marcos")
console.log(indice)

// Cortar (slice)
const amiguinhos = alunosTsi.slice(0, 3)
console.log(amiguinhos) 

const ultimosAlunos = alunosTsi.slice(-4)
console.log(ultimosAlunos)

// contatenar (concat)
const melhoresAmigos = amiguinhos.concat('Samuel', 'Ernani', 'Freitas', 'Artur')
console.log(melhoresAmigos)

// Substituição de elementos ou remover (splice) 
// slice(indice, quantidade, novoparametro)
const a = melhoresAmigos.splice(indice, 1, 'Marcola')
console.log(a)
console.log(melhoresAmigos)