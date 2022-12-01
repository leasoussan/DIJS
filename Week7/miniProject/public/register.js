// here we are wrting for the event from the dom to collect data 


function registerUser() {
    console.log("starts");
    const formRgister = document.forms[0]
    console.log(formRgister);

}

function registerUserProcess() {
    console.log("hereS");
}


// const getForm = document.querySelector("formRegister")
// getForm.addEventListener("submit", registerUser())



const register = (event) => {
    event.preventDefault();
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, username, email, password }),
        header: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const root = document.getElementById('root');
            root.innerText = data.msg
            console.log(data);
        })
}




const login = (event) => {
    console.log("start");
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    //request
    fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        header: {
            'content-type': 'application/json'
        }
    })
        //response  with what?
        .then(res => {
            return res.json()
        })
        .then(data => {
            const root = document.getElementById('root');
            root.innerText = data.msg
        })
}