//Alterar e criar elementos HTML
//Adicionar eventos e validações
//Permite a existência de frameworks como React.js, Vue e Angular

//1-Recuperar elementos no DOM - Forma antiga
const textEl = document.getElementById("link")
const textTN = document.getElementById("h1")
const textCl = document.getElementsByClassName("div")

//2-Recuperar elementos no DOM - Forma recente

const textTIC = document.querySelector("h1")
const textAll = document.querySelectorAll("div")

//3 - Alterando dados de Elementos
document.write("<p>Olá amigos</p>")
console.log(textTIC)
console.log(textTIC.innerHTML)
textTIC.innerHTML ="Tudo de ótimo hoje?"
//4-Criando elementos dinâmicos no DOM
const pjListEl = document.createElement("ul")
const pjList = document.createElement("li")
pjListEl.innerHTML = "casa"
document.body.append(pjListEl)

//5-Eventos
//textEl.addEventListener("",()=>{

//})
function click(){
    console.log("Hey")
}
//Click
textTIC.addEventListener("click",click)
//DOMContentLoaded
let el1 = document.querySelector(".title1")
console.log(el1)
document.addEventListener("DOMContentLoaded",()=>{
    const el1 = document.querySelector(".title1")
})
//Keydown e KeyUP
const inputEl = document.querySelector("input[type=text]")
inputEl.addEventListener("keyup",(event)=>{
    console.log(event)
})
inputEl.addEventListener("keyup",retirarTXT)
function retirarTXT(event){
    console.log(result)
    if(event.keyCode ===13){
        alert("Enter")
    }
}

//Submit

const formEl = document.querySelector("form")
formEl.addEventListener("submit",(event)=>{
    const queryValue = event.target.querySelector("input[name=q]").value
    console.log(queryValue)
    if(!queryValue){
    event.preventDefault()
    alert("Texto vazio")
    }
    console.log("submit", event)
})
const quad = document.querySelector(".quad")
quad.addEventListener("click",click)
function click(){
    console.log("Hey")
}