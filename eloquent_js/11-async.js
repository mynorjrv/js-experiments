// Who can wait quietly while the mud settles?
// Who can remain still until the moment of action?

// - Laozi, Tao Te Ching


// Asynchronous is not parallel, is waiting
// This waiting becomes explicit when
// using an asynchronous model

// And aparently xd programming in parallel can be
// notoriously hard


// One approach to asunchronous programming are
// callbacks functions
// The asynchronous function starts a process,
// the callback is called when the process finishes
// and then returns.

// setTimeout waits for n miliseconds an then
// call the function
setTimeout(() => console.log("Tick"), 500);


// Now we enter the hypothetical realm
// We could have a "readTextFile" function
// that reads a file and then passes the content
// to a callback
// readTextFile("shopping_list.txt", content => {
//   console.log(`Shopping List:\n${content}`);
// });
// → Shopping List:
// → Peanut butter
// → Bananas

// The idea i guess is that we just call the funtion
// until the file has been readed.

// Using callbacks for asunchronicity means we need
// to keep passing new functions to handle the continuation
// of the previous action.
// Again, a toy example
// function compareFiles(fileA, fileB, callback) {
//   readTextFile(fileA, contentA => {
//     readTextFile(fileB, contentB => {
//       callback(contentA == contentB);
//     });
//   });
// }

// Asynchronicity is contagious
// And callig callbacks can become complicated.


// A different approach are promises
// Whith promises, an asynchronous function return an object
// that represents its future result. A promise represents
// a value that may not be available yet.

// Promises provides a then method that allows to register a
// function that should be called when the value of the
// promise becomes available (the promise is resolved).

// Hmmmmm I dont feel this chapter is showing all the power,
// lets try something else.

// Instead of following the book im going to try a lot of experiments