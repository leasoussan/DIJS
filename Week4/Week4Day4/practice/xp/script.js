class Animal {
    constructor(animal, type, color){
        this.animalName = animal;
        this.animalType = type;
        this.animalColor = color;
        this.animalHeight = 50; 
    }
}

const myDog = new Animal("tex", "German Shapered", "Black");

class Mamal extends Animal {
    constructor(mamalName, mamalType, mamalColor){
        super(mamalName, mamalType, mamalColor)
    }
}