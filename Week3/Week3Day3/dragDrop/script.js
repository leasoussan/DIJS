// First we are getting the element that I want to drag -
const box = document.getElementById('box');
const boxTwo = document.getElementById('boxTwo');
const boxThree = document.getElementById('boxThree')
// I ass eventlistener that we have a start recording movment 
box.addEventListener("dragstart", startDrag);


// this is making dragable through JS if we need it to be set with condition 
boxTwo.setAttribute("draggable", "true")
boxTwo.addEventListener("dragstart", startDrag);

boxThree.setAttribute("draggable", "true")
boxThree.addEventListener("dragstart", startDrag);

function startDrag(event) {
    // console.log(event);
    // console.log("hello");
    event.target.style.border = "solid 4px red";
    // here we need to set the element to be droped in the futur
    // I will retreive the element by targetId
    event.dataTransfer.setData("text/plain", event.target.id)
}


function modifyZone() {
    // retrieve allt the target
    const dropzone = document.querySelectorAll(".dropzone")
    console.log("dropzone here", dropzone);
    for (const drop of dropzone) {
        drop.addEventListener("dragover", dragOver);
        console.log("dropthis", drop);
        
        drop.addEventListener("dragover", dropOnTarget);
    }
}

modifyZone()

// using dragover event, the event.target is the dropzone target
function dragOver(event) {
    event.preventDefault();
    //    we are using prevent default is  mandatory when using drag and drop to make it work 
    event.target.style.backgroundColor = "pink";
   


}



// the drop event is on the Target 
function dropOnTarget(event) {
    event.preventDefault();
    console.log("EVENT" ,event);

    event.target.style.backgroundColor = "yellow";
    const datatID = event.dataTransfer.getData("text/plain");
    const getBox = document.getElementById(datatID);
    event.target.appendChild(getBox);
    console.log("end", event.target);
}
