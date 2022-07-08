document.getElementById("bar-button").addEventListener("click",changeDisplayClass);

function changeDisplayClass(){

    if(document.getElementById("header__ul").className === "none"){
        document.getElementById("header__ul").className = "show";
    }else{
        document.getElementById("header__ul").className = "none";
    }
}