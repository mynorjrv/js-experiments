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
        let last = my_array[my_array.length-1-i];
        my_array[i] = last;
        my_array[my_array.length-1-i] = first;
    }
}

console.log(reverseArray(["A", "B", "C"]))
console.log(reverseArrayByIndex(["A", "B", "C"]))
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


function arrayToList(array) {
    let rest = null;
    for (let element of array.reverse()) {
        rest = {
            value: element,
            rest: rest
        };
    }
    return rest;
}

console.log(arrayToList([1]));


function listToArray(list) {
    let array = [];
    let rest = list; // hmmm... not sure
    while (rest['rest'] != null) {
        array.push(rest['value']);
        rest = rest['rest'];
    }
    array.push(rest['value']);
    return array;
}


function listToArray_fromHint(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(rest['value']);
    }
    return array;
}

console.log(
    listToArray(arrayToList([1]))
);


function prepend(element, list) {
    return {
        value: element,
        rest: list
    };
}


function nth(list, index) {
    let rest = list; // hmmm... not sure
    for (let i=0; i<=index; i++) {
        if (rest==null) return undefined;
        if (i==index) return rest['value'];
        rest = rest['rest'];
    }
    return undefined;
}


function recursive_nth(list, index) {
    let rest = list; // hmmm... not sure
    if (rest==null) return undefined;
    if (index>0) {
        index--;
        return recursive_nth(rest['rest'], index);
    }
    if (index==0) return rest['value'];
    return undefined;
}


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 0));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(arrayToList([10, 20, 30]), 3));
console.log(nth(arrayToList([10, 20, 30]), -1));

console.log(recursive_nth(arrayToList([10, 20, 30]), 1));
console.log(recursive_nth(arrayToList([10, 20, 30]), 0));
console.log(recursive_nth(arrayToList([10, 20, 30]), 2));
console.log(recursive_nth(arrayToList([10, 20, 30]), 3));
console.log(recursive_nth(arrayToList([10, 20, 30]), -1));


