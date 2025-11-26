// We have functions
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144


// No parameters
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

// Multiple parameters
const roundTo = function(n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20


// The strange stuff about var
let x = 10;   // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}


// Scopes can be nested
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};


// If not constant, we can redefine functions
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}


// We created functions...
// Now we "declare" functions
function square(x) {
  return x * x;
}


// Declarations can come after use
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}


// And we have the arrow notation
const roundTo_again = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
  console.log("Toot");
};


// We talk about the Call Stack
// The computer needs to remember
// the context were functions were
// called, that is the Call Stack


// WTF with the parameters
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16

// It is a way to implements optional
// parameters but WTF
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

// We also hace default values
function roundTo(n, step = 1) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4


// Closure always scares me
function wrapValue(n) {
  let local = n;
  return () => local; // We are returning a function
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


// This had a name xd and it is not 
// beginner friendly wtf
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10


// We have recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8


// A funny puzzle about recursion
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ??
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

// The indentation indicates the depth
// of the call stack
// find(1, "1")
//   find(6, "(1 + 5)")
//     find(11, "((1 + 5) + 5)")
//       find(16, "(((1 + 5) + 5) + 5)")
//         too big
//       find(33, "(((1 + 5) + 5) * 3)")
//         too big
//     find(18, "((1 + 5) * 3)")
//       too big
//   find(3, "(1 * 3)")
//     find(8, "((1 * 3) + 5)")
//       find(13, "(((1 * 3) + 5) + 5)")
//         found!


// About principles
// refrain from adding cleverness 
// unless you are absolutely sure 
// you’re going to need it.


// About side effects and return values
// A pure function is a fucntion that
// returns a value, has no side effects
// and do not rely on side effects from
// other code.

// But we have to remember, side effects
// are often useful.