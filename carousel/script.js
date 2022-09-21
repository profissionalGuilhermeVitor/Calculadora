const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item")
let currentItem = 0;

const maxItens = items.length;

    controls.forEach(control=>{
    control.addEventListener("click",()=>{
    const isLeft = control.classList.contains('arrow-left')
        if(isLeft){
            currentItem-=1;
            
        }

        else{
            currentItem+=1;
            }
        if(currentItem>=maxItens){
                currentItem=0;
            }            
            if(currentItem<0){
                currentItem=maxItens - 1;
        }
        console.log(control, isLeft,currentItem,items[currentItem])
        items.forEach(item=>item.classList.remove('.current-item'));
        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth",
        });
    });
    });
    
