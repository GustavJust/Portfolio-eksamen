window.addEventListener("load", init);

function init(){

    const projectMenu = document.querySelector('#project_menu');
    
    projectMenu.addEventListener("click", openMenu);


    function openMenu(){
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed'; 
        document.body.style.width = '100%';

        let nextSibling = this.nextElementSibling;
        let firstChild = document.querySelector('#menu_open > :first-child');
        
        console.log("menu open");

        projectMenu.removeEventListener("click", openMenu);
        nextSibling.classList.add("menu_open");
        firstChild.addEventListener("click", closeMenu)
    }

    function closeMenu(){
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';

        let parent = this.parentElement;
        let firstChild = document.querySelector('#menu_open > :first-child');

        console.log("menu close");

        firstChild.removeEventListener("click", closeMenu)
        parent.classList.remove("menu_open");
        projectMenu.addEventListener("click", openMenu);
    }



}
