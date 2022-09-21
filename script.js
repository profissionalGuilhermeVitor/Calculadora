const button = document.querySelectorAll(".btn")
var tela = document.querySelector(".values")
var values =[]
for(const i of button){
    i.addEventListener("click",()=>{
        console.log(i.innerHTML)
        if(i.innerHTML == "media"){
            media(values)
        }
        if(i.innerHTML == "C"){
            document.querySelector(".values").innerHTML = " "
        }

        values.push(i.innerHTML)
        insert(i.innerHTML)
    })

    function insert(num){
        if(i.innerHTML == "C"){
            document.querySelector(".values").innerHTML = " "
            values = []
        }
        else if(i.innerHTML == "media"){
            document.querySelector(".values").innerHTML = media(document.querySelector(".values").innerHTML)
            values = []
        }
        else{
        var numero = document.querySelector(".values").innerHTML
        document.querySelector(".values").innerHTML = numero + num
        }
        return document.querySelector(".values").innerHTML
    }
}

function media(array){
    let aux =0
        console.log(document.querySelector(".values").innerText.split(','))
    for(i of document.querySelector(".values").innerText.split(',')){
        aux +=Number(i)
        console.log(aux)

    }
    let media = aux/document.querySelector(".values").innerText.split(',').length
    return media.toFixed(2)
}

function resultado(){

        document.querySelector(".values").innerHTML = eval(resultado)
    
}

