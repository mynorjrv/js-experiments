// function range(start, end, step=1) {
//     let range_array = [];
//     for(let i = start; i==end; i+=step) {
//         range.push[i];
//     }
//     return range_array;
// }
// if (start>end & step<0) {
//     start = start+end;
//     end = start-end;
//     start = start-end;
// }

function range(start, end, step=1) {
    let range_array = [];
    if (start<end & step>0) {
        for(let i = start; i<=end; i+=step) {
        range_array.push(i);
        }
    }
    if (start>end & step<0) {
        for(let i = start; i>=end; i+=step) {
        range_array.push(i);
        }
    }
    return range_array;
}


function sum(range) {
    let cumulative = 0;
    for (let element of range) {
        cumulative += element;
    }
    return cumulative;
}


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(1, 10, 2))
console.log(sum(range(1, 10)));


function reverseArray(my_array) {
    let reversed = []
    for (let element of my_array) {
        reversed.unshift(element)
    }
    return reversed
}

function reverseArrayByIndex(my_array) {
    let reversed = []
    for (let i=my_array.length-1; i>=0; i--) {
        reversed[(my_array.length-1)-i] = my_array[i]
    }
    return reversed
}

function reverseArrayInPlace(my_array) {
    for (let i=0; i<=my_array.length/2 - 1; i++) {
        let first = my_array[i];
        let last = my_array[my_array.length];
        my_array[i] = last;
        my_array[my_array.length] = first;
    }
}

console.log(reverseArray(["A", "B", "C"]))
console.log(reverseArrayByIndex(["A", "B", "C"]))
console.log(reverseArrayInPlace(["A", "B", "C"]))