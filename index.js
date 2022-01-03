const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const exclamation = document.getElementById("excl-mark");


email.onkeydown = function(){
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    
    if(regex.test(email.value) || regexo.test(email.value)){
        errorElement.innerText = "";
        exclamation.style.display = "none";
    }
    else{
        errorElement.innerText = "Please provide a valid email";
        errorElement.style.color = "hsl(0, 93%, 68%)";
        exclamation.style.display = "block";
    }
}
