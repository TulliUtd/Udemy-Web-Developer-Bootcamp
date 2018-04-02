// SECTION 14 - 157
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

// you could also use "this.value" in place of "numInput.value"
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
});

// SECTION 14 - 156
// var button = document.querySelector("button");
// var isBlack = false;

// button.addEventListener("click", function(){
// 	if(isBlack){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "black";
// 	}
// 	isBlack = !isBlack;	
// })

// SHORT HAND VERSION
// button.addEventListener("click", function(){
// 	document.body.classList.toggle("black");
// });



// SECTION 13 - 144
// querySelector returns only the first result
// querySelectorAll return all the objects that fit the search

// document.getElementByTagName("p");
// document.getElementById("first");
// document.querySelector("p");
// document.getElementByClassName("special")[0};

// SECTION 12 - 139
// Object Methods
// var obj = {
// 	add: function(x,y){
// 		return x + y;
// 	}
// }

// you can call obj.add(10, 5); and it will return 15
// "console.log" is an "object method"

// SECTION 12 - 138
// OBJECTS
// var movieObj = [
// 	{
// 		title: "In Bruges",
// 		rating: "5 stars",
// 		hasWatched: false
// 	},
// 	{
// 		title: "Frozen",
// 		rating: "4.5 stars",
// 		hasWatched: false
// 	},
// 	{
// 		title: "Mad Max",
// 		rating: "5",
// 		hasWatched: true
// 	},
// 	{
// 		title: "Les Miserables",
// 		rating: "3.5",
// 		hasWatched: false
// 	}
// ]

// movieObj.forEach(function(movies){
// 	var result = "You have ";
// 	if(movies.hasWatched){
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movies.title + "\" - ";
// 	result += movies.rating + " stars";
// 	console.log(result);
// });

// SECTION 11 - 131 

// REVERSED
// function printReverse(arr){
// 	for(var i = arr.length - 1; i >= 0; i--){
// 		console.log(arr[i]);
// 	}
// }

// printReverse([3,6,2,5]);

// isUniform()
// isUniform([1,1,1,1]);
// isUniform([2,1,1,1]);
// isUniform(["a","b", "b"]);

// function isUniform(uni){
// 	var first = uni[0];

// 	for(var i=1; i <=uni.length; i++){
// 		if(uni[1] !== first){
// 			return false;
// 		}
// 	}

// 	return true;
// }

// sumArray()
// sumArray([1,2,3]);
// sumArray([10, 3, 10, 4]);
// sumArray([-5, 100]);

// function sumArray(arr) {
// 	var total = 0;
// 	arr.forEach(function(element){
// 		total += element;
// 	});
// 	return total;
// }

// max()
// max([1,2,3]);
// max([10,3,10,4]);
// max([-5,100]);

// function max(arr){
// 	var max = arr[0];

// 	for(var i = 1; i < arr.length; i++){
// 		if(arr[i] > max){
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }




// Notes about SECTION 11 - 129
// .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3 arguments. This is how .forEach was designed.

// The arguments are in a specific order:
// - The first one represents each element in the array (per loop iteration) that .forEach was called on.
// - The second represents the index of said element.
// - The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

// You have a couple options when calling .forEach on an array:

// You can pass in an anonymous function:

// [1,2,3].forEach(function(el, i, arr) {
//   console.log(el, i, arr);
// });
// Or you can pass in a pre-written, named function.

// function logNums(el, i, arr) {
//   console.log(el, i, arr);
// }
 
// [1,2,3].forEach(logNums);
// Notice how in the second example we don't invoke logNums when passing it into .forEach? We simply pass in the function name. We don't need to invoke the logNums function, .forEach does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.



// SECTION 11 - 129
// Todo List Code Along Part 2
// var todos = ["Buy new turtle"];

// var input = prompt("What would you like to do?");

// while(input !== "quit"){
// 	//handle input
// 	if(input === "list"){
// 		listTodos();
// 	} else if (input === "new") {
// 		addTodo();
// 	} else if (input === "delete"){
// 		deleteTodo();
// 	}
// 	//ask again for new input
// 	input = prompt("What would you like to do?");
// }
// console.log("ok, you quit the app");

// function listTodos(){
// 	console.log("*****");
// 	todos.forEach(function(todo, i){
// 		console.log(i + ": " + todo);
// 	});
// 	console.log("*****");
// }

// function addTodo(){
// 	//ask for new todo
// 	var newTodo = prompt("Enter new todo");
// 	//add todos array
// 	todos.push(newTodo);
// 	console.log("Added Todo");
// }

// function deleteTodo(){
// 	//ask for inde of todo to be deleted
// 	var index = prompt("Enter index of todo to delete");
// 	//delete the todo
// 	//splice ()
// 	todos.splice(index, 1);
// 	console.log("deleted Todo");
// }

// FOR EACH SECTION 11 - 127
// var colors = ["red", "blue", "orange", "green"];

// for(var i = 0; i < colors.lenght; i++){
// 	console.log(colors[i]);
// }

// ///

// var colors = ["red", "blue", "orange", "green"];

// colors.forEach(function(){
// 	// this post the message 4x
// 	console.log("inside the forEach");
// });

// ///

// var colors = ["red", "blue", "orange", "green"];

// colors.forEach(function(iLoveDogs){
// 	// this post the message 4x
// 	console.log("inside the forEach" + iLoveDogs);
// });

// result 
//inside the forEach red
//inside the forEach blue
//inside the forEach orange
//inside the forEach green

// SECTION 11 - 126
// Todo List Code Along
// var todos = ["Buy new turtle"];

// var input = prompt ("What would you like to do?");

// while(input !== "quit"){
// 	//handle input
// 	if(input === "list"){
// 	console.log(todos);
// } else if (input === "new") {
// 	//ask for new todo
// 	var newTodo = prompt("Enter new todo");
// 	//add todos array
// 	todos.push(newTodo);
// }
// 	//ask again for new input
// 	input = prompt ("What would you like to do?");
// }
// console.log("ok, you quit the app");


//SECTION 11 - 124
// PUSH adds to the end, POP removes from the end

// SHIFT removes fron of an array, UNSHIFT to add to the front of an array

// IndexOf finds the index of an item in an array
/// var friends = ["Austen", "Mike","Moo"];
// friends.indexOf("Moo"); //2
/// returns -1 if the element is not present
/// friends.indexOf("Poppy"); //-1

// Slice copies parts of an array
/// var friends = ["Austen", "Mike","Moo", "Poppy"];
/// var puppies = friends.slice(2, 3); //returns moo and poppy
/// this creates a new array called puppies. this does not alter the original array
/// you can also copy an entire array by not passing an argument ie friends.slice();

// SECTION 9 - 109 - FOR LOOPS
// for (var i = 5; i < 50; i++) {
// 	if (i % 5 === 0 && i %3 ===0){
// 		console.log(i);
// 	}
// }

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