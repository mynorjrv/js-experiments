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



// We have a replace method xd 
console.log("papa".replace("p", "m"));
// → mapa

// And we can replace using regex
console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
// When replacing, a g (for "global") can be added
// so all matches are replaced, not just the first.
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar

// JAJAJAJAJA replace can make some strange stuff 
// working with the marched groups
console.log(
  "Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
    .replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1"));
// → Barbara Liskov
//   John McCarthy
//   Robin Milner

// In the replacement string, the $2 and $1 refer to
// the parenthesized grpups in the pattern. This works
// all the way up to $9... Is there a way to use more groups?
// The whole match can be referred to with $&

// And some more funny stuff, we can pass a function
// instead of a string as the second argument
// For each replacement, the funtion will be called with
// the matched groups (as well as the whole match) as arguments
// and the retrun value will be inserted in the new string

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

// Again, when matching, the match object contains the
// whole match and the groups in the pattern



// THis chapter never eeeeeeeeeeeeeeends :(


// We can use replace to remove comments from a
// piece of js code
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1 + /* 2 */3"));
// → 1 + 3
console.log(stripComments("x = 10;// ten!"));
// → x = 10;
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1  1

// The pattern /\/\/.*|\/\*[^]*\*\//g consist of two parts
// \/\/.* matches any // followed by any non-newline characters
// . do not include newline characters
// \/\*[^]*\*\/ matches multiline comments like /**/
// [^] represents any character that is not in the empty
// set of characters and [^]* is any number of those characters

// JAJAJAJJAA but the last example fails
// [^]* tries to consume as much characters as possible,
// so it skips the first closing */ 

// Repetition operators are greedy, they match as much as they can
// and backtrack from there. We use ? to make them nongreedy,
// this means they will start by matching as little as possible.
// this aplies for all repetition operators (+?, *?, ??, {}?)

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log(stripComments("1 /* a */+/* b */ 1"));
// → 1 + 1



// And something that feels strange xd 
// regex patterns can be dynamically created
let person_name = "harry";
let regexp = new RegExp("(^|\\s)" + person_name + "($|\\s)", "gi");
console.log(regexp.test("Harry is a dodgy character."));
// → true

// In this case, we are using normal strings, so \ must be used to
// scape the string and use the \s special character

// The second argument of the constructor are the options for the
// regex, in this case general and case insensitive

// Since we are accepting normal strings, we need a way to scape all
// spacial characters that may appear in the string
let another_name = "dea+hl[]rd";
let escaped = another_name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp_2 = new RegExp("(^|\\s)" + escaped + "($|\\s)",
                        "gi");
let text = "This dea+hl[]rd guy is super annoying.";
console.log(regexp_2.test(text));
// → true

// The idea is that we take all special characters in the string
// and replace them with \\character
// Is strange that there is not a dedicated method to do this...



// Strings have the indexOf method, for reges there is a similar method
// called search. It rreturns the first index where the expression
// was found or -1 if there is no match
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1

// Apaaarently indexOf can have an offset which apaaaarenly could be useful
// but search does not have it




// Some strange stuff may happen when using global and 
// for some reason we are insisting in using an offset
// But that is for tomorrow xd


// U know what xd lets skip the part about that 
// global and index of stuff

// Maybe an interesting part is the use of matchAll
let input = "A string with 3 numbers in it... 42 and 88.";
let matches = input.matchAll(/\d+/g);
for (let match of matches) {
  console.log("Found", match[0], "at", match.index);
}
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40



// But lets go to a different problem n.n
// Parsing :)
// Lets parse this ini config file
// searchengine=https://duckduckgo.com/?q=$1
// spitefulness=9.7

// ; comments are preceded by a semicolon...
// ; each section concerns an individual enemy
// [larry]
// fullname=Larry Doe
// type=kindergarten bully
// website=http://www.geocities.com/CapeCanaveral/11451

// [davaeorn]
// fullname=Davaeorn
// type=evil wizard
// outputdir=/home/marijn/enemies/davaeorn

// Whith the following rules
// - Blank lines and lines starting with semicolons are ignored.
// - Lines wrapped in [ and ] start a new section.
// - Lines containing an alphanumeric identifier followed by an = character 
// add a setting to the current section.
// - Anything else is invalid.

// And the function is reeeeeally funny 
function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  // New lines could have a return carriage character
  for (let line of string.split(/\r?\n/)) {
    let match;
    // We assign inside the if xd
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      // And we are using this funny stuff
      // As i unsdertood, we are creating a new
      // property with the name match[1] which is an
      // empty object and then section is assigned to
      // this new empty object.
      // It feels like a dirty trick but okey
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  };
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}



// regex operators like . or ? work on code units
// and noth whole characters, which means that if
// we are using a 2 code unit characters (as emojis)
// we are going to se strange stuff
console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true

// The solution: marking the patterns as unicode adding
// a u. And I dont know how this affects other patters xd
console.log(/🍎{3}/u.test("🍎🍎🍎"));
// → true



// summary xd
// /abc/	A sequence of characters
// /[abc]/	Any character from a set of characters
// /[^abc]/	Any character not in a set of characters
// /[0-9]/	Any character in a range of characters
// /x+/	One or more occurrences of the pattern x
// /x+?/	One or more occurrences, nongreedy
// /x*/	Zero or more occurrences
// /x?/	Zero or one occurrence
// /x{2,4}/	Two to four occurrences
// /(abc)/	A group
// /a|b|c/	Any one of several patterns
// /\d/	Any digit character
// /\w/	An alphanumeric character (“word character”)
// /\s/	Any whitespace character
// /./	Any character except newlines
// /\p{L}/u	Any letter character
// /^/	Start of input
// /$/	End of input
// /(?=a)/	A look-ahead test


// And im not doing the exercise for now :)