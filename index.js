function validation(){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("text");

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        ext.innerHTML = "";

    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email";
    }
}