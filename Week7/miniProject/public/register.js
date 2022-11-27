function registerUser(){
    console.log("starts");
    const formRgister = document.forms[0]
    console.log(formRgister);

}

function registerUserProcess(){
    console.log("hereS");
}


const getForm = document.querySelector("formRegister")
getForm.addEventListener("submit", registerUser())
