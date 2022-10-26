// Exercise 1: Timer
// Instructions


// Part I

//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will alert “Hello World”.


// Part II

//     In your Javascript file, using setTimeout, call a function after 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III

//     In your Javascript file, using setInterval, call a function every 2 seconds.
//     The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//     The interval will be cleared (ie. clearInterval), when the user will click on the button.
//     Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
// as soon as there will be 5 paragraphs inside the <div id="container">.


// 1
// const divDisplay = document.getElementById("container");
// setTimeout(greading, 2000)
// function greading(){
//     alert("Hello World")
// }

// 2
// function greading(){
//     const divDisplay = document.getElementById("container");
//     const newPara = document.createElement('p');
//     newPara.textContent="Hello World";
//     newPara.classList.add("p");
//     divDisplay.appendChild(newPara);
// }

// 3



// const interval= setInterval(paraList,2000)
// let count=0 ;
// function paraList(){    

//     count++;
//     if(count <= 5){
//         const container = document.getElementById("container");
//         const newPara = document.createElement('p');   
//         newPara.textContent ="hello World";
//         newPara.classList.add('p');
//         container.appendChild(newPara)
//     }else{
//         clearInterval(interval);
//     };
// }



// const interval= setInterval(paraList,2000)
// const clearButton = document.getElementById('clear')
// clearButton.addEventListener("click", stopInterval)

// function paraList(){    
//     const container = document.getElementById("container");
//     const newPara = document.createElement('p');   
//     newPara.textContent ="hello World";
//     newPara.classList.add('p');
//     container.appendChild(newPara)
//     };


// function stopInterval(){
//     clearInterval(interval)
// }





// -----------------------------------------_EX XP- 2
// Exercise 2 : Move the box
// Instructions

//     In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


// let position = 0


function myMove(){
    const getAnimation = document.getElementById('animate')
    let position =0;
    const getMoving= setInterval(boxAnimation, 10);
    function boxAnimation(){
        if(position == 350){
        clearInterval(getMoving);
        }else{
        position++;
        getAnimation.style.left = position+'px';
    };
    }
}