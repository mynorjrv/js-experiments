// We got a ternary
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// Values are automatically converted
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
// The 51 is a string
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

// Undefined values are not equivalent to false
console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// But
console.log(0 == false);
console.log("" == false);
// are true

// There are "precisely equal" operators
console.log(0 === false);
console.log("" !== false);

// Logical operators can be short-circuited
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100