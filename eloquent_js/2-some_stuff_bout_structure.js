// Bindings =? variables
// Aparently this is a "binding"
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
// → 100

// They are mutable
let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

// Mutable again
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

// Some stuff...
// The environment
// The collection of bindings and their values 
// that exist at a given time is called the environment. 
// When a program starts up, this environment is not empty. 
// It always contains bindings that are part of 
// the language standard, and most of the time, 
// it also has bindings that provide ways to interact 
// with the surrounding system. For example, in a browser, 
// there are functions to interact with the currently 
// loaded website and to read mouse and keyboard input.

// There are functions
prompt("Enter passcode");

// We have a "print" function
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30
// The console can be opened in the browser using F12

// Functions can return values
console.log(Math.max(2, 4));
// → 4

// We have Control Flow and Conditional Execution
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// We have looooops :)
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);


//let result = 1;
result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// Increments and decrements
counter += 1;
counter++;

