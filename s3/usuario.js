var idade = Number(window.prompt("Digite sua idade"))//Pega dado do usuário e converte para number
window.alert("Erro")//Emite um alerta para o usuário
var ok = window.confirm("É isso mesmo???")//Pede uma confirmação ao usuário
if(isNaN(idade)){//Verifica se a variável idade é Not a Number- não um número
    console.log("Erro")
}