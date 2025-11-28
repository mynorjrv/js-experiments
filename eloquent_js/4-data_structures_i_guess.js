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

// And about ==, it compares identity
// aka that both objects has the same 
// reference. They can hace the same values
// but not the same object.


// About notation
let journal_2 = [];

function addEntry(events, squirrel) {
  journal_2.push({events, squirrel});
}

// We are pushing an object without the
// properties names, this is a shorthand 
// that means that the value is taken from
// a binding with the same name.

// We can then add things
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


// Coding a more complex formula
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

// And we can get the table from the log
// for a specific event
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", journal_2));
// → [76, 9, 4, 1]


// We have a kind of iterator
// A for loop for indices
for (let i = 0; i < journal_2.length; i++) {
  let entry = journal_2[i];
  // Do something with entry
}
// Could be replaced by
for (let entry of journal_2) {
  console.log(`${entry.events.length} events.`);
}


// And for the example, we at last
// loop over all possible events
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(journal_2));
// → ["carrot", "exercise", "weekend", "bread", …]


// We then can use the functions to 
// all the log
for (let event of journalEvents(journal_2)) {
  console.log(event + ":", phi(tableFor(event, journal_2)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// And so on...

// Filtering those results
for (let event of journalEvents(journal_2)) {
  let correlation = phi(tableFor(event, journal_2));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812


// Adding an event from the combination of two events
for (let entry of journal_2) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", journal_2)));
// → 1

// Final things to learn
// push and pop works at the end of the array
// unshift and shift works at the start
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

// We have a index of method
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

// We can slice 
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

// We can concat
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]


// And we have some methods for strings
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

console.log("  okay \n ".trim());
// → okay

console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b


// Aaaaand functions can accept an
// arbirary number of parameters
// It is called a rest parameter
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

// We can "unpack"
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

// And to unpack with other arguments
console.log(max(max(9, ...numbers, 2)));
// → 7

// And unpack inside an array
let words_2 = ["never", "fully"];
console.log(["will", ...words_2, "understand"]);
// → ["will", "never", "fully", "understand"]


// Works also for objects
let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1});
// → {x: 10, y: 5, z: 1}


// Some stuff about Math which i guess is not important


// And we can "unpack", here called destructuring
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

// Is equivalent to 
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

// Objects can also be unstructured
let {u_name} = {name: "Faraji", age: 23};
console.log(u_name);
// → Faraji



// We have a way to try is a property exist
function city(object) {
  return object.address?.city;
}
console.log(city({address: {city: "Toronto"}}));
// → Toronto
console.log(city({name: "Vera"}));
// → undefined

console.log("string".notAMethod?.());
// → undefined
console.log({}.arrayProp?.[0]);
// → undefined

// Which I actually do not understand
// but okay



// JAJAJAJAJA and it make sense xd
// Json comes from here
let string_2 = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string_2);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string_2).events);
// → ["weekend"]