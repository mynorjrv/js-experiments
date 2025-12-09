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