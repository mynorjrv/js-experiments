let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
    return array.reduce(
        (flat, currentArray) => 
            flat.concat(currentArray)
    );
};

console.log(flatten(arrays));



function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    };
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// function every(array, test) {
//     let is_every = true;
//     for (let element of array) {
//         if (!test(element)) {
//             is_every = false;
//         }
//     };
//     return is_every;
// };

function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    };
    return true;
};

// Yep, I saw the hist
// the DeMorgan law was a pretty detail
function every_on_some(array, test) {
    return !array.some(a => !test(a))
};

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every_on_some([1, 3, 5], n => n < 10));
// → true
console.log(every_on_some([2, 4, 16], n => n < 10));
// → false
console.log(every_on_some([], n => n < 10));
// → true