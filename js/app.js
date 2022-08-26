function checkPass(){

    const passwds = document.querySelectorAll("input[type='password']");
    const checked = document.querySelector("#check-pass");

    passwds.forEach(elmt => {
        elmt.addEventListener("focusout", function(){
            if(passwds[0].value != passwds[1].value){
                passwds.forEach(inpt => inpt.classList.add("error"));
                checked.textContent = "*password does not much";
            }
            else{
                passwds.forEach(inpt => inpt.classList.remove("error"));
                checked.textContent = "";
            }
        })
    })
}

checkPass();