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