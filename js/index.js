window.addEventListener("load", init);

function init(){

    const introCard = document.querySelector('#intro_card');
    const webCard = document.querySelector('#web_card');
    const emneCard = document.querySelector('#emne_card');
    const spilCard = document.querySelector('#spil_card');
    const passionCard = document.querySelector('#passion_card');
    const virkCard = document.querySelector('#virk_card');
    

    introCard.addEventListener("click", expand);
    webCard.addEventListener("click", expand);
    emneCard.addEventListener("click", expand);
    spilCard.addEventListener("click", expand);
    passionCard.addEventListener("click", expand);
    virkCard.addEventListener("click", expand);

    function expand (){
        let nextSibling = this.nextElementSibling;
        nextSibling.classList.remove('closed');
        console.log(this, "just expanded");
        this.removeEventListener("click", expand);
        this.addEventListener("click", close);
        
    }

    function close(){
        let nextSibling = this.nextElementSibling;
        nextSibling.classList.add('closed');

        console.log(this, "just closed");

        this.addEventListener("click", expand);
    }
}
