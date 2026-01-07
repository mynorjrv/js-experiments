// Lets speedrun this xd

// We want order in our code, and thats it xd
// The idea: make isolated code and functionality


// Modules tries to solve problems
// You specify dependencies and an interface
// for other programs to use

// The ideal scenario: systems working as legos
// with defined connectors between pieces



// JAJAJAJA historically js didnt have modules
// Then, u used the global bindings xd which aparently
// was a mess

// We now have ECMAScript n.n
// And with it, ES modules


// We now can export stuff 
// Everything else is private for the module
// const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                "Thursday", "Friday", "Saturday"];

// export function dayName(number) {
//   return names[number];
// }
// export function dayNumber(name) {
//   return names.indexOf(name);
// }


// And we and import n.n
// We import a list of binding names using {}
import {dayName} from "./10.1-dayname.js";
let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);
// → Today is Monday


// Aparently, browsers resolve modules as web adresses
// which I dont really understand xd

// Imports and exports must appear in the outer
// body of the module.

// Modules can have a default value
// export default ["Winter", "Spring", "Summer", "Autumn"];
// The default values is usually used when a module
// is only intended to export a single binding.

import seasonNames from "./10.2-seasonname.js";

console.log(seasonNames)

// Aaaaaand we can import all bindings
// which is always a bad practice so we are 
// going to mention but then ignore it
// import * as dayName from "./dayname.js";



// The evolution of modules are packages
// The idea is to write code and then distribute,
// copy and install it in different places

// Then, when the package is modified you can
// update the version.

// This is assuming we have the infrastructure to centralize
// the packages we are using xd
// The most common tool to accomplish this is npm :)
// Npm is an online storage of packages
// and a program to install and manage packages

// And stuff about packages, licenses and stealing code :)

// After installed, a package can be imported like
// import {parse} from "ini";

// console.log(parse("x = 10\ny = 20"));
// // → {x: "10", y: "20"}



// Before ECMAScript :) people looked for ways to handle modules

// The OG way was to declare a mega function
// a "immediately invoked function expression"
// to create a scope and assign the intreface to
// a single global variable

const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

// THis is not ideal :)

// The solution people implemented was a module loader(?)
// This is called CommonJS Modules

// CommonJS Modules look exactly as scripts but they have acces
// to two special bindings: the require function and
// the exports object

// Somehting like this using npm packages
// const ordinal = require("ordinal");
// const {days, months} = require("date-names");

// exports.formatDate = function(date, format) {
//   return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
//     if (tag == "YYYY") return date.getFullYear();
//     if (tag == "M") return date.getMonth();
//     if (tag == "MMMM") return months[date.getMonth()];
//     if (tag == "D") return date.getDate();
//     if (tag == "Do") return ordinal(date.getDate());
//     if (tag == "dddd") return days[date.getDay()];
//   });
// };

// And using our module like this
// const {formatDate} = require("./format-date.js");

// console.log(formatDate(new Date(2017, 9, 13),
//                        "dddd the Do"));
// // → Friday the 13th


// CommonJS is implemented with a module loader that,
// when loading a module, wrpas its doe in a function xd
// and passes the require and exports bindings.


// The idea is covoluted xd and we just want to know that
// this style exists, there is no reason to write new code 
// with it :)

