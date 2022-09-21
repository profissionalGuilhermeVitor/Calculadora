class MobileNavbar {
    constructor(mobileButton,menuList, menuItens){
        this.mobileButton = document.querySelector(mobileButton);
        this.menulist = document.querySelector(menuList);
        this.menuItens = document.querySelectorAll(menuItens);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this)
        
    } 
    animateLinks(){
        this.menuItens.forEach((link,index)=>{
            console.log(index/7+0.3)
            link.style.animation
            ?(link.style.animation ="")
            :(link.style.animation = `fade 0.5s ease forwards ${index/7+0.3}s`)
        })

    }   
    click(){
        this.mobileButton.addEventListener("click", this.handleClick);
        
    }
    handleClick(){
        this.menulist.classList.toggle(this.activeClass);
        this.mobileButton.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    init(){
        if(this.mobileButton){
            this.click();
        }
        return this;

    }
}

const navbar = new MobileNavbar(".mobile-menu",
".nav-list",
".nav-list li",
);
navbar.init();