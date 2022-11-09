// //arrow function
// const myGrade = 80;
// const mypromise = new Promise((resolve, reject) => {
// 	if (myGrade > 70) {
// 		resolve("I get a gift")
// 	} else {
// 		reject("I don't have good grades")
// 	}
// })

// console.log(mypromise);
// //it will return a promise object
// // Promise
// // state : fulfilled
// // result : "I get a gift"

// // --------------
// // WITH A SET TIMEOUT

// const grade = 80;

// const successStudies = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (grade > 70) {
// 			resolve(["phone", "flowers"]) //the array is the result of the promise
// 		} else {
// 			reject("Low grades")
// 		}
// 	}, 2000)
// })

// //after 2 seconds the promise will come back resolved

// //CONSUMING THE PROMISE 

// //I cannot call the promise right away because it takes time for the promise to come
// //back fulfilled or rejected
// // so I need a way to wait for the promise --> we use
// // the then method, takes as a parameter the result of the fulfilled promise
// // use the result if the promise is fulfilled
// // so the result parameter is equal to ["phone", "flowers"]
// successStudies.then(function (result) {
// 	console.log("result", result); //["phone", "flowers"]
// })

// const gradeJohn = 80;
// let bankAmountJohn = 1000;

// const successStudiesJohn = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (grade > 70) {
// 			resolve(50)
// 		} else {
// 			reject("Low grades")
// 		}
// 	}, 2000)
// })

// //if the promise reject it goes straight to the catch method
// successStudies
// 	.then((money) => bankAmountJohn += money)
// 	.catch((err) => console.log("IN THE CATCH", err))


// //chaining promise
// // then method is also returning a promise
// // the result of a then method is whatever it returns
// successStudies
// 	.then((result) => bankAmount += result)
// 	.then((amount) => { throw new Error("wrong") }) //amount = 1050
// 	.catch((err) => console.log("IN THE CATCH", err))





// ______________-------------------------------------------------------*****************_NEW WAY TO MAKE PRMISES


// function test() {
// 	return new Promise((resolve, rejecte) => {
// 		if (username === "john") {
// 			resolve("greate")
// 		} else {
// 			reject("no");
// 		}
// 	})
// }
// this is the older way to write a promise--->>> lets check the new ways


// async
// asyng function will return autotmaticaly a promise 

// const username = "ron"

// async function test() {
// 	if (username === "john") {
// 		return "greate"//when i return something in a async function it will be fulfiled with a results
// 	} else {
// 		throw new Error("error");//if the async function throu an error , it meant that the promeis is rejected and the the results is the error
// 	}
// }
// //here I can do .then to follow on the results of the promises, so if I want to add the erro i need a catch
// test()
// .then((res) => console.log(res))//if the problem is resolve is will be given greate
// .catch((err) => console.log("you are in the catch function"))// with this I get the error display and i dont crush my ocde



// ____How to deal with the then


// async function learnJs(){
// 	return "im learning Js"
// }


// // state: will be fulfiled 
// // results : im learning Js

// async function learnReact(){
// 	return "im learning Reract"
// }

// // state: will be fulfiled 
// // results : im learning REacr

// // If I want to learn first JS then I want React- wo i can learn react only after i learned JS for a certain amount of time
// // insteade of using .then .catch

// here we need a third function in order to make the conditions
// await >>> key word to use only in a async function 
// the await will do the job of the then 
// async function learning(){
// 	const js = await learnJs()//waiting for the promise to come back setteled(rejected or resolved) 
// 	// and retrieve the result
// 	console.log(js);
// 	const react = await learnReact()
// 	console.log(react);
// }

// learning()
