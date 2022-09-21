class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);

    }
    addClickEvent(){
        this.mobileMenu = document.addEventListener("click", this.handleClick);
    }
    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",

);
mobileNavbar.init();