// Quotes - 3 type
// `` add function
function sum(a, b) {
    return a + b;
}

console.log(`Sum is: ${sum(2,5)}`)

// `` multiple line string
const myTeam = `My team includes: John,
 Mary,
 Luna`;
console.log(myTeam)
// "" '' multiple line also possible
console.log('hello\"world');

// \n -new line
// \', \", \\, \t
// special symbol \ not a part of string


// String methods
// string.length without ()
const name = 'Ani'
console.log('Ani'.length)

// Have access to all string elements - chars
// Get element from the String
// [+ - pos]

const name = 'Ani';
console.log(name[2])
// for ( ... of string )

// mutable immutable
let name = 'Hi';
name = 'h' + name[1];
console.log(name)
name[0] = 'h';
console.log(name)

let names = ['Ani', 'Marine', 'Helen']
names[0] = 'Hello'
console.log(names)

// how to change?
let myString = 'Hi';

// str.toLowerCase(), str[0].toUpperCase()
let myString = 'Hi';
console.log(myString.toLowerCase())

// Searching for the substring: str.indexOf(substr, pos), str.lastIndexOf(substr, position)

const myString = 'Hello, I am Helen';
if(myString.indexOf('Hel')) {
    console.log('Hello')
}

// try to find Hello, hello, Hel + position
// troubles with if (str.indexOf(substr, pos))

// includes, startsWith, endsWith
// str.includes(substr, pos) - true/false
// str.startsWith(substr, pos), str.endsWith(substr, pos)
const myString = 'Hello, I am Helen';
console.log(myString.startsWith('Hello', 3))

// Getting a substring - 3 methods
// str.slice(-+start, -+end), without end, better to use
// str.substring(start, end]), start could be > end, - doesnt work
// str.substr(+-start, length )
const myString = 'Hello, I am Helen';

const myString = 'Hello, I am Helen';
console.log(myString.substring(5, 0))
// compare stings
console.log("z".codePointAt(0))
console.log(String.fromCodePoint(90))

// Useful methods:
// concat
console.log("firstString".concat("secondString"))
console.log("firstString".concat("s", "e", "c", "o", "n", "d"))

split
console.log("Hello World".split(""));
"Hello World".split(" ");
console.log("Hello World ksert setr".split(" ", 6));
const myString = 'Hello'
for (let str in myString) {
    console.log(myString[str])
}

// repeat
"hello".repeat(5);

// search
"hi, hello, hey".search("hello"); // 4

// replace
console.log("hi".replace("hi", "hello"))
// replaceAll
let myString = 'hello my name is Ani';
// padEnd, padStart(length,"*") add symbols

// trim -remove spaces
// trim(), trimStart(), trimEnd()
