// Okey? lets see it 

// A phrase about evolution:
// It’s not always the best or most brilliant 
// ideas that win, but rather the ones that 
// function well enough within the right niche 
// or that happen to be integrated with 
// another successful piece of technology.


// Regex syntex is cryptic and the implementation
// in js is ugly apparently xd


// Hmmmm two notations: RegExp() object or /.../
let re1 = new RegExp("abc");
let re2 = /abc/;

// Hmmmmm with RegExp, the string use normal
// backslashes rules, but when using the slashes
// we need to use backslaches to use some characters
// for example /\// is a slash

// Also, in normal strings backslashes that
// are not part of special character codes are ignored,
// in regex they are preserved.

// Anddd aaaalso, some characters have special meaning
// in regex, for example + and ? which must be preceded by
// backslashes if the are meant to represent the character
// itself

let aPlus = /A\+/;

// We use regex to match string patterns
// and there are some rules :) very convoluted
// cryptic rules
console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false

console.log(/abc/.test("haseiwoeabckdslas"));


// But finding abc in a string could be done
// using indexOf :) regular expressions are useful
// for more funny patterns 


// For example, square backets represent
// a character in the set inside the brackets
console.log(/[0123456789]/.test("in 1992"));
// → true
// Inside square brackets, a hyphen (-) represent
// a range of characters, ordered by the characters
// Unicode number. [0-9] covers all digits
console.log(/[0-9]/.test("in 1992"));
// → true

// Some sets have shortcuts
// \d is any digit (the same as [0-9])
// \w is alphanumeric
// \s whitespaces (space, tab, newline, and so on)
// \D a character that is NOT a digit
// \W a nonalphanumeric character
// \S a nonwhitespace character
// . any character except for newline


// And a closer to home example, we could match
// date format with the following expression
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

// Cool but the pattern stats to seem ugly xd

// Some other details. Between square brackets
// lose their special meaning (like . or +)
// an backslashes can also be used inside brackets
// for example [\d.] represents a digit or a .

// To invert a set we use ^ at the beggining 
// of the set
let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true


// JAJAJAJA and some historical stuff
// \w does not match characters in other alphabets xd
// it matches the 26 characters in the Latin alphabet
// both upper and lowercase, decimal digits and underscore xd
// Buuuuuuuut \s matches whitespaces in all alphabets
// (aparently there exist some strange stuff like the
// nonbreaking space and the Mongolian vowel separator)

// Patching this is funny xd
// we have special sets using \p
// or \P for inverted sets, and the /.../ syntax
// must now includ a u at the end /.../u
// JAJAJAJ the book uses the word cosmopolitan
// it is funny because yesterday I was reading that
// orcas are a cosmopolitan specie

// For example
// \p{L} is any letter in any alphabet
// \p{N} any numeric character
// \p{P} any punctuation character
// \P{L} any nonletter (\P inverts)
// \p{Script=Hangul} any character from the given script

console.log(/\p{L}/u.test("α"));
// → true
console.log(/\p{L}/u.test("!"));
// → false
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false

// Usually is prefered to use \p{L} over \w
// buuuuut \d is prefered over selectig all possible digits


// We can also match repeating parts of a pattern
// Using + matches one or more of the preceding character (pattern)
console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
// Using * matches zero or more 
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

// Using ? makes a part of the pattern "optional"
// it may appear zero or one time
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

// And unsing braces {} we can specify specific
// ranges of a precise number of times that a
// pattern must repeat
// \d{4} means we are matching 4 characters
// \d{2,4} means we are matching at least 2 and
// at most 4 characters
// \d{2,} means we are matching 2 or more times
let dateTime_2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime_2.test("1-30-2003 8:45"));
// → true


// To repeat a certain pattern instead of a single
// character or set, we can use parenthesis
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true

// In this example he hoo can have any number of
// extra o's and the expression matches one or more
// hoo's.
// The i at the end of the expression makes it case
// insensitive.