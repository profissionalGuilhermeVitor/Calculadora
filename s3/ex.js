var n1 = [1,2,3,1,21,1,12,1,2121,1,21,134,5,12,12,4]
//Array -métodos

console.log(n1.slice(0,10))//Fatia sua array
console.log(n1.push(2))//Adiciona no final da sua array
console.log(n1)
console.log(n1.pop())// Remove elementos no fim do array
console.log(n1)
console.log(n1.shift())//Remove elementos do inicio do array
console.log(n1)
console.log(n1.splice(1,5))//Remove elementos em fatias
console.log(n1)
let s = "AAaadqasfafafafa"
console.log(s.slice(1,5))
//Concatenar arrays
var n2 = [1,21,31,214,14,15,15,11,1,1,112,12,121,1213]
console.log(n1 + n2)
console.log(typeof(n1 + n2))// Converte sem eu querer para string
console.log([n1,n2])//Produz 2 arrays
console.log("Nova string = " , n1.concat(n2))
//Desestruturar array -Definir duas variáveis que vão receber os primeiros elementos daquela array
let set = [1,2,3,4,5]
let [s1,s2] = set //1,2
console.log("n1", s1)
console.log("n2", s2)
//Funções 
function sum(n1,n2,n3,n4,n5){
    let res =0
    console.log("Arguments",arguments,typeof(arguments))
    for(const n of arguments){
        res += n
    }
    return res
}
sum()
//Valor x Referência

function soma(n){
    n.value *= n.value
    return n
}

const objV = {valor: 10}
console.log(soma(objV))

//Escopo da função
var soma = function (n){
    n +=n
    return n
}

console.log(soma(3))
//Arrow functions

var sub =(n)=> n -=n
console.log(sub(120))

//Callback

function multi(values,func){
    for(const i in values){
        values[i] = func(values[i])
    }
    return values
}

const values = [1,2,3,4,5]
const func = (n) => n*3

console.log(multi(values,func))





