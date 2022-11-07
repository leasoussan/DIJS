// Instructions

//     Create a form with two fields (name, last name) and a submit button.
//     When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
//     The output should be:

// output

// first I want to get the data from the input, 
// then I want to convert it to json, 
// then to diplay it on the dom 


const getForm = document.querySelector('form');
const getFirstName =document.getElementById('first_name_input');
const getLastName =document.getElementById('last_name_input');
const getButton = document.getElementById("button_to_json")


getForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data ={};
    data['firstName'] = getForm.first_name_input.value;
    data['lastName'] = getForm.last_name_input.value;
    const jsonFormat = JSON.stringify(data)
    document.getElementById('results').textContent = jsonFormat;


    });

