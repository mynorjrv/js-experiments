function joinWifi(networkID, code) {
    // Again, we are using a fictional function
    // And this should be a nice workaround,
    // we get a resolve if the code is correct, 
    // we keep waiting if the code was partially correct,
    // we reject if the code was at some point incorrect.
    let actual_code = '235908421';
    return new Promise((resolve, reject) => {
        if (code == actual_code.slice(0, code.length)) {
            if (code == actual_code) {
                resolve(true);
            }
            else {
                setTimeout(() => reject("Waited for pass"), 10_000);
            }
        }
        else {
            // It cannot be a bare rejection, is just if
            // the previous conditions failed
            reject("Incorrect password.");
        }
        
    });
}

// Promises can only be resolved or rejected ones.
function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    setTimeout(() => reject("Timed out"), time);
  });
}

// We cannot wait for promises insede for loops
// we ned recursion to use this process
function crackPasscode(networkID) {
  function nextDigit(code, digit) {
    let newCode = code + digit;
    console.log("new code ", newCode);
    return withTimeout(joinWifi(networkID, newCode), 50)
      .then(() => newCode)
      .catch(failure => {
        console.log("failure ", failure);
        if (failure == "Timed out") {
          return nextDigit(newCode, 0);
        } else if (digit < 9) {
          return nextDigit(code, digit + 1);
        } else {
          throw failure;
        }
      });
  }
  return nextDigit("", 0);
}


// JAJAJAJAJA I do not know why the program waits
// after printing the code, I guess it is waiting for
// some setTimeout to finish.
crackPasscode("HANGAR 2").then(console.log);
// → 555555


// async keyword allows to write pseudosynchronous code
// to describe asynchronous computation. An async function
// implicitly returns a promise and can, in its body,
// await other promises in a way that looks synchronous.

// Rewriting crackPasscode:
async function crackPasscode_refactor(networkID) {
  for (let code = "";;) {
    for (let digit = 0;; digit++) {
      let newCode = code + digit;
      try {
        await withTimeout(joinWifi(networkID, newCode), 50);
        return newCode;
      } catch (failure) {
        if (failure == "Timed out") {
          code = newCode;
          break;
        } else if (digit == 9) {
          throw failure;
        }
      }
    }
  }
}

crackPasscode_refactor("HANGAR 2").then(console.log);

// Methods can also be async, and again, when such functions
// or methods are called they return a promise. 

// Copying lirerally: As soon as the function returns something,
// that promise is resolved. If the body throws an exception,
// the promise is rejected.

// Inside an async, an await can be done to wait for a promise
// to resolve and only then continue the execution of the function.
// If the promise rejects, an exception is raised at the point
// of the await.

// The await "freeze" the execution of the body of the function.

// JAJAJA this is generally more pleasant than fighting with chains
// of then calls. But we are actually using promises and we are still
// interacting with them directly.


// Aaaand again crisis because I do not know if this
// should be in the original notes xd but lets continue here
// The ability to pause and then resume excecution is not 
// exclusive to async functions. We also have generators :)

// function* defines a generator, when you call a generator 
// you receive an iterator

function* powers(n) {
  for (let current = n;; current *= n) {
    yield current;
  }
}

for (let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}
// → 3
// → 9
// → 27

// Again, copying literally:
// Initially, when you call powers, the function is frozen at 
// its start. Every time you call next on the iterator, 
// the function runs until it hits a yield expression, 
// which pauses it and causes the yielded value to become 
// the next value produced by the iterator. When the function 
// returns (the one in the example never does), the iterator 
// is done.

// JAJAJAJAJA and they area actually usefull to write iterators
// For example the iterator for the Group class can be written as
// Group.prototype[Symbol.iterator] = function*() {
//   for (let i = 0; i < this.members.length; i++) {
//     yield this.members[i];
//   }
// };

// yield statements are local to the environment of the generator
// and not in an inner function you define inside of it.

// Hmmmm async is a special type of generator. The await resembles
// a yield(?), confused.