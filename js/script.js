// SECTION 9 - 109 - FOR LOOPS
for (var i = 5; i < 50; i++) {
	if (i % 5 === 0 && i %3 ===0){
		console.log(i);
	}
}

//SECTION 9 - 106 - annoy o matic game
// var guess = prompt("Are we thre yet?");

// while(guess.indexOf("yes") === -1){
// 	var guess = prompt("are we there yet?");
// }

// alert("yay we made it!");

// if(guess = yes || yeah){
// 	alert("yay, we're here!");
// }

//print all numbers divisible by 5 and 3 between 5 and 50
// var num = 5;

// while(num <= 50){
// 	if(num % 5 === 0  && num % 3 === 0){
// 		console.log(num);
// 	}
// 	num+=1;
// }

// SECTION 9 - 100 - GUESS A NUMBER COURSE 101
//create secret number
// var secretNumber = 8;
// //ask user for guess
// var guess = Number(prompt("guess a number?"));
// //check if guess is right
// if(guess === secretNumber){
// 	alert("You got it right");
// }
// //otherwise check if higher
// else if(guess > secretNumber){
// 	alert("Too high");
// }
// //otherwise check if lower
// else {
// 	alert("Too low");
// }


//AGE
// // Get age and convert it to a Number (prompt always returns a String)
// var age = Number(prompt("What is your age?"));

// // If age is negative
// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }

// // If age is 21  
// if(age === 21) {
//  console.log("Happy 21st Birthday!");
// }

// // If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }

// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }