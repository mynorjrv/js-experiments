// We have objects and arrays
// Objects allow us to group values
// (including other objects)

// For some reason, this chapter is 
// introduce with a problem about a furro

// xd about representations
// We thecnically could store lists
// as lists: "2 3 5 7 11"

// We have arrays
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

// Talking about properties without
// talking about OOP
let myString = "Hello"
console.log(myString.length)

// Aparently, .max is a propertie?
// A method i guess in a rigurous way
console.log(Math.max(2, 4))

// null and undefined has no propertires
null.length;
// → TypeError: null has no properties


// This is strange...
// value.x acces the property x
// value[x] acces the property whose name
// is the result of evaluating x


// This kind of makes sense... Kind of

// Elements in arrays are stored as properties
// with index numbers used as property name


// JAJAJJAJAA WTF we are now talking
// about methods xd
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH


// And some other examples
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


// Im confused xd thsi looks like a struct
// This does not look as a class but it
// is called an object:
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

// Properties names do not need to be
// a valid binding name, like "touched tree"
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

// There is some ambiguity with the arrow
// notation
// n => {prop: n} the braces are interpreted
// as the body of the function
// n => ({prop: n}) returns the object

// We can delete
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

// We can check properties names
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

// And asign the properties from one 
// object to other
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


// Again with the furro
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* And so on... */
];


// numbers, strings, and Booleans, are all immutable
// This does not mean the binding can be reasigned

// Objects instead are mutable, the properties
// (then the content) may be changed

// We also talk about "reference" to objects
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


// JAJAJAJA an object can be constant,
// this doent mean the values of its properties
// cannot change
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};