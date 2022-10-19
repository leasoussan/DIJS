const shoes = ['adiddas', 'Nike'];

const shoewTwo = {
    nameShoe:"Adiddas",
    color: "red",
    price: 100,
};

console.log(shoewTwo.price);

console.log(shoewTwo["price"]);



const shoewTwoArray = {
    nameShoe:"Adiddas",
    color: ["red", "orange", "yellow"],
    price: [100, 80 , 50],
};

const sentence =`The ${shoewTwoArray.color[2]} ${shoewTwoArray.nameShoe}}`

console.log()




// --------------------EX 
const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

userCart["lastName"] = "Smith";
console.log(userCart);

const pearPrice = userCart["prices"]["pear"];
const taxeRate =  1.17;

userCart["prices"]["pear"] = pearPrice * taxeRate;
console.log(userCart["prices"]["pear"]);


const userFruits = prompt("What's your favorit Fruits between Apple, banaba and pears");
const response = userFruits.toLocaleLowerCase();
console.log(userCart["prices"][response]);

