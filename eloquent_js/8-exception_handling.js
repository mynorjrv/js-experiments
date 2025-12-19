// U know what? lets try to speedrun this section
// xd 

// Aparently, the language was originally not stric
// we have a strictmode which is automatically use
// in classes and modules
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined


// Strict mode is that the this binding holds undefined
// in functions that are not called as methods
// This is useful because when calling a method or
// constructor incorrectly JS will produce an error
// as soon as it tries to read from this, rather than
// writing to global scope.


// This messes up with global bindings
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinand

// This panics
"use strict";
function Person(name) { this.name = name; }
let correct_ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined

// But this is opnly important when creating constructors
// as functions. Class constructors always panics when
// they dont have the new


// JAJJJAA stupid dynamic typing xd
true * "monkey";
// is absolutely fine n.n

// You could annotate your code... but is not that pretty
// (graph: Object, from: string, to: string) => string[]
function findRoute(graph, from, to) {
  // ...
}

// types introduce their own complesity but ajá
// it is a trade off. And there are dialects of js
// which introduce types, the most popular TypeScript


// Since the language itself does not help much finding errors
// the idea is to run programs to debug

// JAJAJAJA JS forces you to make automated testing
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return "مرحبا".toUpperCase() == "مرحبا";
});

// Aaaand yes, there are test suites and test runners

// Aaaand self-containde persistent values rather than 
// changing object, tends to be easy to test.
// duh


// How do you find errors? Just f read the error message :)

// buuuuut, sometimes the line producing an error is just the
// first place where a flaky value manifested itself.

// An example
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…

// Where is the problem?

// And the suggestion is: you do not start by making 
// random changes to what you already have
// You think, analize what is happening, you make hypothesis
// and test them.

// JAJAJAJAJA and printing to debug is always the way
// You can also use the debugging capabilities of browsers
// or use the debugger statement



// When interacting with other stuff, not all problems
// are caused by the programmer xd

// If the program is used by other people, the idea is 
// to make the program activaly do something in response
// to the problem.

// A way to implement this: returning specific values
// in case of errors
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

console.log(promptNumber("How many trees do you see?"));


// Sometimes, a function may return wvery possible value.
// A possible solution is to wrapp the result in an object
// to indicate if there was any problem
function lastElement(array) {
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {value: array[array.length - 1]};
  }
}

// The problem with special return values is that wherever we
// called the function, we need to check for that value.
// Is that what we call error propagation?

// Ta bieeeeen, lets finish tomorrow



// Now, lets see exceptions
// The idea of stoping a program when it didnt proceeded normally
// and jumping to a place where we know how to handle the problem
// is Exception Handling

// Exceptions unwinds the call stack from the level where the 
// exception was met and throwing away all the call contexts

// Handling exceptions means to set "obstacles" to catch the exceptions
// in their way up the stack.

// But I already knew that xd why am I sumarizing
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}

// All standard. A detail, instances of Error gather information
// about the call stack that existed when the exception was created,
// it is called a stack trace. 
// .stack is a property of the Error objects that contains 
// the function where the error ocurred and which functions made
// the failing call.


// Cleaning the mess :)
// Exceptions might prevent some parts of control flow to take place
// Code with side effects could easily be affected by this,
// also using mutable data could be affected.

const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

// function transfer(from, amount) {
//   if (accounts[from] < amount) return;
//   accounts[from] -= amount;
//   accounts[getAccount()] += amount;
// }

// Aaaaand we have a finally to try managing this
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}


// JAJAJAJAJ we dont have selective catching in JS

// Some details, when an exception is kept unhandled, it is handled
// by the environment. Browsers write to console, node aborts the 
// whole process.

// For programming mistakes, unhandled exceptions are a good
// way to signal a corrupted program.

// For expected problems, we want to explicitly handle them.

// The problem, we cannot differenciate what caused the exception.
// And we usually dont want to use balnket-catch exceptions

// To solve this, we can make custom exceptions
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}


// And we can write assertions by hand. The idea is to
// blow up the program when programming errors happen.
// And should be reserved for common and easy to make mistakes.
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}


