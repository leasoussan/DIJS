// setTimeout(function, time)

// setTimeout(sayHi, 1000);

// function sayHi() {
//     alert("welcome here");   
// }

// const button = document.getElementById('btn');

// button.addEventListener("click", start);


// function start(){
//     console.log("starting");
//     setTimeout(sayHi, 2000)
// }


// const getBanner = document.getElementsByClassName('banner');


// ____________________________________________DISPLAY ten minutes abnen
// setTimeout(displayBanner, 5000);

// // function displayBanner(){
// //     const getBanner = document.getElementsByClassName('banner');
// //     const newDiv =document.createElement('div');
// //     newDiv.style.backgroundColor ="red";
// //     getBanner.appendChild(newDiv)
// // // }
// // const timerCountdoun = 0


// function displayBanner(){
//     const div =document.getElementById('banner');
//     const banner = document.createElement('div');
//     banner.textContent="sale is done in 10"
//     banner.classList.add('banner')
//     console.log("here");
//     document.body.appendChild(banner)   
// }


// _________________________________________________SET INTERVAL

// const timerOne = setInterval(addDiv, 1000);

// let counter = 0;
// function addDiv(){
//     counter++;
//     if(counter<=10){
//     const div =document.getElementById('banner');
//         const banner = document.createElement('div');
//         banner.textContent="sale is done in 10"
//         // banner.style.backgroundColor="red"; 
//         banner.classList.add("banner");
//         console.log("here");
//         document.body.appendChild(banner)   
//     }else{
//         clearInterval(timerOne);
//     }
// }



// // __________________________________________Set interval with counter
// const timerCount= setInterval(counterTen, 1000);
// let count = 600000
// let timeDisply= count/60000
// log(timeDisply)

// function counterTen() {
//     count++;
//     if(count>= 10){
//         const div = document.getElementById("num");
//         setInterval(decreasecounter, 1000)
//         const bannerTimer = document.createElement("div");

//     }
// }




// _______________response
const span = document.getElementById("num");
let counter =10;
const timer =setInterval(decreasecounter, 1000)


function decreasecounter(){

    if(counter >=0){
        span.textContent = counter;
        counter--;
    }else{
        clearInterval(timer)
    }
}