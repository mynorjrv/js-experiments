// Hmmm js does not have a default sleep method
// But it can be acomplisehd ussing async

async function main() {
  console.log("Before sleep");
  await sleep(2000); // Sleep for 2 seconds
  console.log("After sleep [After 2 Seconds]");
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

main();

console.log("before setTimeout")
setTimeout(()=>console.log("Callback call"), 2000)
console.log("After setTimeout but before callback call")


// Que rarísimo xd 
// I always need to resolve the promise to actually use then
// Otherwise the then is never called
// strange xd but interesting
function getDelayedRandom(time) {
    return new Promise((resolve) => {
        // setTimeout(()=>Math.random(), time);
        setTimeout(()=>resolve(Math.random()), time);
    });
}

let random_number = getDelayedRandom(1000);
console.log("Getting a promise of a random number");
console.log(random_number);
console.log(typeof(random_number));

console.log("Before using the then");
random_number.then(value => {
    console.log(`Got ${value}, after then ${random_number}`)
});
console.log(random_number);

// Thens can be chained, and we can chain non async anc async
// processes
function doStuffWithTheRandom() {
    return getDelayedRandom(1000)
        .then(number => number+10)
}

console.log("Antes de llamar al random modified")
let random_modified = doStuffWithTheRandom()
console.log(random_modified)
random_modified.then(value=>console.log(value))

// As I undestand, even if I have a then I actually
// have an async function which means I should use 
// again then to get the actual value

// It is actually stranger than I expected, but the idea of 
// using experiments instead of following the book feels like
// the best decission ever.


// I do not know if this part should be in the original
// notes but im just going to continue here

// Async also needs a way to fail
// With callbacks, ensuring that the failures are difficult
// to be properly reorted to the callbacks. 

// The common convention is to use two values:
// someAsyncFunction((error, value) => {
//   if (error) handleError(error);
//   else processValue(value);
// });


// Aparently promises are easier to handle, they can be resolved
// (the action finished successfully) or rejected (it failed).
// Resolve handlers (as registered with then) are called only
// when the action is succesful, and rejections are propagated.

// Rejections also provides a value, usually called the reason.
// When an exception causes the rejection, the exception value is
// used as the reason. Promise.reject create a new, immediately
// rejected promise.

// To handle rejections, promises have a catch method xd
// It is basically a then but for rejections
// Buuuuut xd then actually can accept two arguments, an
// acceptHandler and a rejectHandler like then(acceptHandler, rejectHandler)

// Im not sure if I undestand... A function passed to the Promise
// constructor receives a second argument, alongside the resolve
// function, which it can use to reject the new promise.(?)

// I think this chapter may be better if instead of using a 
// fictional readTextFile we used vanillajs functions as examples
// function textFile(filename) {
//   return new Promise((resolve, reject) => {
//     readTextFile(filename, (text, error) => {
//       if (error) reject(error);
//       else resolve(text);
//     });
//   });
// }


// JAJAJAJA WTF, a convoluted pipeline of values and failures
new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1:", value))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2:", value));
// → Caught failure Error: Fail
// → Handler 2: nothing