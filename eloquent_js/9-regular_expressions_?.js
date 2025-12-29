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


// Additional to the test method we have .exec
// It returns null if there is not match, 
// and a match object otherwise
let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

// Ahhh but just the first match is returned

// Strings have a similar method 
console.log("one two 100".match(/\d+/));
// → ["100"]


// When matching patterns in parenthesis
// The objects will contain the full match 
// and the subpatterns
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]


// Matching a variable patterns seems strange
console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]

// With + we are matching the full match
// and the last smallest match


// To hide the subpatterns we can use ?: 
// at the start of the subpattern
console.log(/(?:na)+/.exec("banana"));
// → ["nana"]

// Subpatterns are actually called groups xd



// Js has its own Date class :)
// Glad to not be dealing with dates using regex

// Current date
console.log(new Date());
// → Fri Feb 02 2024 18:03:06 GMT+0100 (CET)

// Specific datetime
console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)


// JAJAJAJAJAJA months are 0-indexed but days
// are 1-indexed xdxdxd 

// Dates are stored as number of miliseconds since
// 1970 in utc time zone, this is the "unix" time.
// //.getTime returns this number
console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
// A single argument is treated as a milisecond count
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)

// To get the milisecond count of now we can create
// an object or we can use the function Date.now

// Some useful methods: getFullYear, getMonth, getDate,
// getHours, getMinutes, getSeconds
// Lets ignore getYear xd

// aaaand we can use regex to try to create pretty datetime objects
// The _ can also be used to unpack and I should review unpacking
// it seems strange in this case.
function getDate(string) {
  let [_, month, day, year] =
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)



// We can use boundaries and look-aheads
// which help to match a whole string

// ^ is called a caret and matches the start
// of the input string
// $ matches the end

// For example
// /^\d+$/ is a string exclusively made up of digits
// /^!/ matches any string starting with !
// /x^/ does not match any string because there cannot
// be an x before the beggining of the string


// \b thecnically matches word boundaries (space-alphanum)
// but it is not very reliable


// look-aheads work similarly. They provide a pattern
// and will make the match fail if the input does not match
// that pattern, but dont move the match position forward

console.log(/a(?=e)/.exec("braeburn"));
// → ["a"]
console.log(/a(?! )/.exec("a b"));
// → null

// (?=) means the pattern after the = is necessary to match
// but is not part of the matched string.
// /a(?=e)/ matches an a followed by an e but do not include the e
// (?!) is a negative look-ahead. This only match if the pattern
// doesnt match.



// And we can also have patterns of different choices
let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pugs"));
// → false

// This is like an or



// Sehhhhh... I will learn about automatas at some point.
// But regex patterns can be represented with cool diagrams.
// The idea is to find a path from the start of the diagram
// to the end, if we find a path then our expression matches.

// This process of matching part by part produces backtracking.
// When a pattern fails, it returns to the previous part to
// try and match another path of the pattern. This can cause
// that a pattern has to try an exponential ammount of possible
// paths.

// Its kind of confusing but... I found 
// https://stackoverflow.com/questions/9011592/in-regular-expressions-what-is-a-backtracking-back-referencing
// https://stackoverflow.com/questions/8132412/which-regular-expression-requires-backtracking
// https://www.regular-expressions.info/catastrophic.html

// Catastrophic
// ^(.*?,){11}P
// Better, but I do not understand it
// ^([^,\r\n]*,){11}P