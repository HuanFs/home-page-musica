const menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");
let submmit = document.querySelector("form button");
let openClose=0;
submmit.addEventListener("click", Submmit);
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
//função que checa o email e exibe a mensagem de cadastro
function Submmit(){
    let mail = document.querySelector("form input");
    console.log(mail);
    if(mail.value.includes(".")){
        alert("Inscrição realizada com sucesso!")
        mail.style.border="2px solid #000";
        mail.value="";
    }
    else{
        alert("formato de email inválido");
        mail.style.border="2px solid red";
    }
}