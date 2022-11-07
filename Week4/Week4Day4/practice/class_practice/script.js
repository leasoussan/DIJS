// Exercise 1

// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. 
// Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed

// / Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".





class TV {
    constructor(brand, volume =50, channel=1){
        this.brandTV = brand;
        this.channelTV = volume;
        this.channel = channel;
    }   
    
    volumeUp (){
        this.channelTV +=1;
        if(this.channelTV <=0 || this.channel=100){
            console.log("you reached the max");
        }
    }

    volumeDown (){
        this.channelTV -=1;
        if(this.channelTV <= 0){
            console.log("you reached the max");
        }
    }
}

const samsungTv = new TV("samsung");
samsungTv.volumeUp()
console.log(samsungTv);



// Part II
// Create a subclass for Smart TV ----(here I extends) 
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default

class SmartTv extends TV {
    super(brandSmartTv, volumSmartTv, channelSmartTv, netflix=true){   
    this.netflix = netflix;
    }

    volumeSmartTvUP(){
        this.volumeSmartTv += 10; 
    }
}

const newTV = new SmartTv("lg", 50)
console.log(newTV);
newTV.volumeSmartTvUP()
newTV.volumeSmartTvUP()
console.log(newTV);

/

