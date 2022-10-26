// Steps 

// PLAY THE GANE - FUNCTION
// prompt question with boolean 


    
function playTheGame(){
const readyToPlay = confirm("Hi do you want to play")
if (readyToPlay == false){
    alert("goodby then");
    return;
}else{
    let askNumber= Number(prompt("PLEASE CHOOSE A NUMBER"));
    // or if)(typeof askNumber !== typeof(askNumber))
    if(isNaN(askNumber)){
        alert("Sorry We asked numbers!");

    }if(askNumber <0 || askNumber >10){
        alert("hum... between 0 and 10 Please.")
    }else{
        console.log("you choose number " +askNumber )
    };   
    
    };
}
    let computerNumber = Math.floor(Math.random() *11)  

  


function compareNumbers(askNumber,computerNumber){
    const trials = 3;

    while(trials< 3){
        askNumber;
        if(askNumber == computerNumber){
            alert("You WINNERRRRRRR!!!");
            askNumber;
        }else if(askNumber <computerNumber){
            alert("your number is smaller ");
            askNumber;
        }else if(askNumber > computerNumber){
            alert("you'r number is smaller sorry")
            askNumber;
        };

    }

    // for(let i =0; trials<=3; i++){
    //     if(askNumber == computerNumber){
    //         alert("You WINNERRRRRRR!!!");
    //         askNumber;
    //     }else if(askNumber <computerNumber){
    //         alert("your number is smaller ");
    //         askNumber;
    //     }else if(askNumber > computerNumber){
    //         alert("you'r number is smaller sorry")
    //         askNumber;
    //     }
    };
// };

//

// when true>
// ask a number with promot 
// check the number 
// on the number, get it in number if it not a number alers not a number 

// check if between 1-10 if not - alert 
 

// If the number is onkeydown(between 0-10)
// have a random number saved for the computer value 


// take the user nujber and take the computer number is the number is eaul - alert winner 

// else 
// take a while loop while the number is not = if the number is bigger say x 
// if the nuber is samller say y 

// while the number of thest is not biger than 3- if yes - prompt alert