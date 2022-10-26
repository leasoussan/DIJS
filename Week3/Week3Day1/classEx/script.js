// Add a <div id="container"></div> to the HTML file
// Create a function that adds the name of each students to a paragraph
// each paragraph needs to be background yellow, font-size 25px
// Add the 3 paragraph to the div already on the pa;

const users = ["John", "Lola", "Tom"];


function addPara() {
    const wrapper = document.getElementById("container")
    for(let i=0; i<users.length; i++){
        const paragraph = document.createElement("p");
        const text = document.createTextNode(`Hello ${users[i]}`);
        paragraph.appendChild(text);
        wrapper.appendChild(paragraph);
    }
}