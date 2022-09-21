//Parte 1-Tipos
console.log("1", typeof 1)
console.log("1.2", typeof 1.2)
console.log("Felipe", typeof "Felipe")
console.log("1", typeof "1")
console.log("true", typeof true)
console.log("number + string", typeof("2" + 2))
// Parte 2-Infinity

console.log(typeof Infinity)
console.log(1/0)
//Parte 2-NaN
console.log(NaN)
console.log("A"/2)
console.log(typeof NaN)
//Parte 3

console.log(null)
console.log(typeof undefined)
//Parte 4 - Objeto
// A maioria dos dados do Javascript é tratada como objeto

const pessoa = {
    nome: "Vinicius"
}
const pessoa2 ={
    nome: "Lucas"
}
console.log(pessoa2.nome)
//Parte 5 - Array

var array = [1,3,4,5,1,1,2,1,2,"Array"]
console.log(array[2])

//Parte 6 -Date
console.log(Date())
console.log(new Date())
console.log(new Date(2022,8,22))


//Funções
function digaOla(n1,n2){
    return n1 + n2
}

digaOla(2,3)



//Estruturas de repetição
let contador = 1
while(contador < 10){
    // Enquanto algo for verdadeiro, execute
    //true
    console.log(`${contador}`)
    contador++
}

for(let i = 0;i<9;i++){
    console.log(`${i}`)
}
//For of

const nomes = ["Felipe", "Maria", "Paulo"]

for(const iterador of nomes){
    console.log(iterador)
}

//For in - Objetos
//Obj.prop
const person = {
    name: "Guilherme",
    age: 25,
    cidade: "Uberlândia",
}

console.log(person[name])
console.log(person['name'])
for (const prop in person){
    console.log(`Prop: ${prop} - ${person[prop]}`)
}

//Estruturas de Decisão
let t = 6
if(t<6){
console.log("UEPA")
}
else if(t=6){
console.log("OK")
}

else{
    console.log("IRAA")
}

x = (t<6)? 10: 12
console.log(x)

//Switch

let variavel = 1;
switch(variavel){
    case 1:
        console.log("Ok")
        break
    case 2:
        console.log("ca")
        break
}
//var algo = window.prompt("Peça algo")
//console.log(algo)