const menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");
let openClose=0;
menuIcon.addEventListener("click", menuOptions);
function menuOptions(){
    if(openClose==0){
        menuIcon.src="assets/img/menu-open.svg";
        menu.style.height="0px";
        menu.style.paddingBottom="0px";
        openClose++;
    }
    else if(openClose==1){
        menuIcon.src="assets/img/menu-close.svg";
        menu.style.height="280px";
        menu.style.paddingBottom="1em";
        openClose--;
    }
}
//CRIAR UMA FUNÇÃO QUE EXIBE UMA CAIXA
//DE DIALOGO DE EMAIL ENVIADO