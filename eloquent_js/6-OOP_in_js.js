// Leeeets see it,
// now we are talking about oop

// The "object" or rather "types" of objects
// are the unit of program organization.

// The idea is making programs more structured.

// Objects abstracts, they are exposed via an
// interface and the things inside are encapsulated.



// Methods are Properties that holds callables
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my fur and whiskers");
// → The white rabbit says 'Oh my fur and whiskers'
hungryRabbit.speak("Got any carrots?");
// → The hungry rabbit says 'Got any carrots?'

// Both Rabbit objects have the speak method

// JAJAJAJA but we are not defining a class yet,
// and we are referencing the object using this. 
// which I guess is similar to self
// Is like an extra parameter

// Noooow... The function () {} declared functions
// and the arrow functions are different in how they 
// bind this.

// Each function has its own "this" whose value
// depends on the way it is called. Functions declared
// with the "function" keyword cannot refer to this
// of the wrapping scope.

// Arrow functions instead do not bind their
// own "this", they see the "this" binding of
// the scope around them.

let finder = {
  find(array) {
    console.log("Method this")
    console.log(this)
    return array.some(v => v == this.value);
  },
  value: 5
};
console.log(finder.find([4, 5]));
// → true

// THis is complex, we are also defining 
// a method with a shorthand, we are creating
// the method find. And we are also seeing how
// this takes a value from the surrounding object.


// This is a translation and works fine
function another_find(array) {
    console.log("Method this")
    console.log(this)
    return array.some(v => v == this.value);
}

let finder_different = {
  another_find,
  value: 5
};
console.log(finder_different.another_find([4, 5]));
// → true


// This will not work
function comparer(v) {
    console.log("Named callable this")
    console.log(this)
    return v==this.value
}

function another_2_find(array) {
    console.log("Method this")
    console.log(this)
    return array.some(comparer);
}

let finder_different_2 = {
  another_2_find,
  value: 5
};

console.log(
    finder_different_2.another_2_find([4, 5, 6])
);
// → true

// using the named callable inside the some
// we detatch from the this in the method,
// we get a global object or something like that

// Also, since we are comparing an array with
// the callable, we get multiple calls of the
// named callable.


// This is a translation and works fine
function yet_another_find(array) {
    console.log("Method this")
    console.log(this)
    return array.some(
        v => {
            console.log("lambda this");
            console.log(this);
            return v == this.value;
        }
    );
}

let yet_another_finder = {
  yet_another_find,
  value: 5
};
console.log(
    yet_another_finder.yet_another_find([4, 5])
);
// → true

// Yessss, when using a lambda the "this"
// do not change from the this of the method.


// JAJAJJAA this is absolutely not for begginers
// or maybe for begginers but they will probably understand
// half of it.

// This is doing reaaaaaaally weel xd wtf
// But I will get prototypes and classes for tomorrow

// Prototypes are a way to keep the methods of
// certain types in the same place, rather than
// adding methods individually.

// The OG object is Object.prototype
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

// It looks like toString is a property inside
// an empty object, but it was getted from the
// Object.prototype.

// We have a resloution order where when a property
// is not found in an object, the property is searched
// in the protorype, and so on until an object without 
// prototype is reached (like Object.prototype)

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

// And we have another types of prototypes
console.log(
  Object.getPrototypeOf(Math.max) ==
  Function.prototype
);
// → true
console.log(
  Object.getPrototypeOf([]) == Array.prototype
);
// → true


// Again, prototypes provides the methods that
// An object that comes from that prototype
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// → The black rabbit says 'I am fear and darkness'

// The prototype thou does not have the 
// atributes of the objects (like type).
// But I guess you can do it, the thing about
// prototypes is that they contain things that
// all objects that come from the prototype share.
// It is like inheritance.


// The js prototype system is called a free-form
// take on abstract data types or classes.

// Classes define the shape of a type of object,
// what propertires (methods and attributes) it has.
// An object is called an instance of the class.

// Yessss, we talked about this, properties that
// need to be different per object have to be stored
// directly in the objects themselves.

// The funny part xd we can have a constructor of a class
// whithout having use the class keyword xd
// the constructor is basically a function that
// creates an object, ensuring the properties the object
// is supposed to have are actually stored.
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}


// Whith the class keyword what we have is 
// a constructor and the prototype
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

// JAJAJJJAJ this is so funny xd
// The code defines a binding called Rabbit, it holds
// a function that runs the contructor and has 
// a prototype property that hold the methods.

// To create an instance of the class we use the
// new keyword

let killerRabbit = new Rabbit("killer");


// JAJAJAJAJAJA and classes were introduced later
// Originally, to create a class you used the function keyword

// function ArchaicRabbit(type) {
//   this.type = type;
// }
// ArchaicRabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let oldSchoolRabbit = new ArchaicRabbit("old school");


// And a strange difference:
// objects have a prototype, but prototypes are
// associated with a contructur through its prototype property.

console.log(Object.getPrototypeOf(Rabbit) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf(killerRabbit) ==
            Rabbit.prototype);
// → true


// Other things, we can create per instance properties using
// this. And it is also possible to declare properties in the
// class declaration, but class properties are not added to
// the prototype, they are just added to the instances.

class Particle {
  speed = 0;
  constructor(position) {
    this.position = position;
  }
}

// JAJAJJAJAJA and whe can have unnamed classes
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello