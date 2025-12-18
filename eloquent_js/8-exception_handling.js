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

// Ta bieeeeen, lets finish tomorrow