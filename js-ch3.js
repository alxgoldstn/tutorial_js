//Alex Goldstein
//Learning JavaScript with "JavaScript: The Definitive Guide," 6th Edition.
//Chapter 3

 /*
 Covers basics of values, variables, types, primitive/object, null/undefined, garbage collection, scope.
 */
 
 // Number Representation
 console.log(0x41); // Hexadecimmal => 65
 console.log(04412); // Octal => 2314
// Hex = 0x#####
// Octal = 0####
// While some implementations (strict) of JS do not recognize the formatting of Octal, many do;
// therefore, never write a base-10 number with a leading zero.

console.log(6.3e20); // Scientific notation, 6.3x10^20. `e` is not case-sensitive.

// Math Object
Math.min(3,5,6); // also, max();
Math.random(); // 0 <= x < 1.0
Math.exp(1); // exp(n) --> e^n
//many more...

// Infinity exists in cases of overflow.
var x = Math.pow(10,10000000000);
console.log(x); // => Infinity

12/0; // Also inifinity (or negative infinity)
// 0/0 is NaN, however.

// Note: you cannot divide Infinity by Infinity.

// Some values:
console.log(Infinity,
    Number.POSITIVE_INFINITY,
    Number.MAX_VALUE,
    Number.MIN_VALUE,
    NaN);

// Odd cases:
var x = "Hello";
console.log(NaN == NaN); // Does not evaluate to true
// Therefore, to find out if x is not a number:
console.log(x != x); //The only time this statement will be true is if x is NaN, because of line 39.
console.log(isNaN(x)); //same
console.log(isNaN(Infinity)); // false. Infinity is a number. 
console.log(isFinite(Infinity)); //Excludes +-infinity, and NaN (value)

var zer = 0;
var negZer = -0;
console.log(zer === negZer); //true. Negative zero is the same as zero, except...
console.log(1/zer === 1/negZer); //false. Used as a numerator, it does not evaluate to the same.

// Javascript is not exact with decimals, because it uses binary floating-point numbers.
var x = .3 - .2;
var y = .2 - .1;
console.log(
    x == y, //false
    x == .1, //false
    y == .1 //true
    );
// For information that must be exact (eg, finance), use scaled integers (eg $5 --> 500)
// or I may try to build this later.

// Dates
var then = new Date(2015, 3, 15); // Year: 2015; Month: April (3 from 0-index); Day: 16 (15 from 0-index);
var laterInDay = new Date(2015, 3, 15, 19, 20, 10); //Same, at 7:20:10pm, local time
console.log(then, laterInDay);

var now = new Date(); //Default constructor set for current date/time
console.log(now - then); //Time difference in milliseconds

console.log(now.getFullYear(), now.getMonth(), now.getDate(), now.getDay(), now.getHours());
console.log(now.toString()); // Fancy


