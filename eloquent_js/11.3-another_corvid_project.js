// using a dummy request function xd
async function request(address, message) {
    // A dummy await, we are awaiting nothing
    try {
        let response = await "Hola buenas tardes";
        return response
    } catch (failure) {
        // This should never happen
        throw failure;
    }
    
}

// console.log("Before request");
// let response = await request("32323.23232.32323", "Hola wenas");
// console.log(response);
// console.log("After reques");


// Requesting to all the ips in the network
// The funny way to introduce network scans xdxdxd
for (let addr = 1; addr < 256; addr++) {
  let data = [];
  for (let n = 0; n < 1500; n++) {
    data.push(n < addr ? 3 : 0);
  }
  let ip = `10.0.0.${addr}`;
  request(ip, {command: "display", data})
    .then(() => console.log(`Request to ${ip} accepted`))
    .catch(() => {});
}

// Actually just the following ips accepted the request
const screenAddresses = [
  "10.0.0.44", "10.0.0.45", "10.0.0.41",
  "10.0.0.31", "10.0.0.40", "10.0.0.42",
  "10.0.0.48", "10.0.0.47", "10.0.0.46"
];


// We could have multiple promises and want them all to complete
// before proceeding, this can be done with Promises.all
// which converts an array of promises into a single promise
function displayFrame(frame) {
  return Promise.all(frame.map((data, i) => {
    return request(screenAddresses[i], {
      command: "display",
      data
    });
  }));
}

// Frame is theoretically an array of display data arrays

// To play and stop we wrap this display in a class
// and use an async play and stop 
// This is to control the speed of the playback and resembles 
// the sleep function I tried to do before
function wait(time) {
  return new Promise(accept => setTimeout(accept, time));
}

class VideoPlayer {
    constructor(frames, frameTime) {
        this.frames = frames;
        this.frameTime = frameTime;
        this.stopped = true;
    }

    async play() {
        this.stopped = false;
        for (let i = 0; !this.stopped; i++) {
        let nextFrame = wait(this.frameTime);
        await displayFrame(this.frames[i % this.frames.length]);
        await nextFrame;
        }
    }

    // Hmmm does this actually stop?
    // This is part of the async power i guess
    stop() {
        this.stopped = true;
    }
}

// clipImages should be the array of arrays
// let video = new VideoPlayer(clipImages, 100);
// video.play().catch(e => {
//   console.log("Playback failed: " + e);
// });
// setTimeout(() => video.stop(), 15000);


// Talking a little about the event loop
// Callbacks are not directly called by the code that scheduled them.
// If we call setTimeout from within a function, that function
// may have already returned by the time the callback is called.
// In this case, the control of the program does not return to 
// the function that made the scheduling.

// Asyncs have their own empty call stack. And aparently this is
// the reason managing exceptions without promises is so hard.
// As I undestood, the catch handler wont be on the stack when
// the callback throw an exception
try {
  setTimeout(() => {
    throw new Error("Woosh");
  }, 20);
} catch (e) {
  // This will not run
  console.log("Caught", e);
}

// But ajá, the idea is that no matter how close two exents are, 
// js will run only one even at a time. This is the Event Loop.
// If there is nothing to run, the loop is paused, otherwise
// event are added to the queue and the code is excecuted one
// after another. This is actually the dessire to run async,
// slow running code cand elay the handling of other events.

// xd a callback can "get late" because it can only run
// after the loop is free
let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
// → Wasted time until 50
// → Timeout ran at 55


// And the same for promises, even if they are already resolved
// they must wait for the current scriot to finish
Promise.resolve("Done").then(console.log);
console.log("Me first!");
// → Me first!
// → Done



// Aaaaand about bugs
// The key problem, when using async, there may be gaps in
// the execution. Basically, there could be info that is
// not present yet.

// An example with a fictional function
// async function fileSizes(files) {
//   let list = "";
//   await Promise.all(files.map(async fileName => {
//     list += fileName + ": " +
//       (await textFile(fileName)).length + "\n";
//   }));
//   return list;
// }

// We are trying to async read all files at the same time
// rather than in sequence.
// and a side note, arrow functions can also be async

// The code looks actually pretty fine but is entirely broken xd
// It will allways return a single line of output, listing
// the file that took the longest to read.

// Why?

// JAJAJAJJA All the files that are readed uses the original 
// list = "", the map expression runs before anything has been 
// added to the list. It feels absolutely strange,
// the updated values for the files that end faster are lost.

// In this case is better to take a non-mutable aproach,
// computing new values is less error prone than changing values.

// async function fileSizes(files) {
//   let lines = files.map(async fileName => {
//     return fileName + ": " +
//       (await textFile(fileName)).length;
//   });
//   return (await Promise.all(lines)).join("\n");
// }

// Spotting the gaps should be relatively easy :)