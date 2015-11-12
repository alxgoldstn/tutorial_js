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
console.log(now.toLocaleDateString()); //MM/DD/YYYY


// Text in Javascript
// To write Unicode characters into Javascript strings, use \uXXXX, where XXXX == hex code
console.log("\u03c0");

var x = "Hello";
console.log( //some string methods
    x.charAt(0), // Also can use x[0], however this only works as of ECMAScript 5
    x.substring(1,3),
    x.slice(-2), //last 2 characters
    x.indexOf("l"),
    x.indexOf("l", 3), //index at/after 3rd index
    x.indexOf("q"), //-1, not found
    x.split("e"),
    x.replace("l", "L"),
    x.toUpperCase()
    );
console.log(x); // Note that x is still unchanged after the previous methods are called


// Boolean
if(
    false 
    || undefined 
    || null 
    || 0 
    || -0 
    || NaN 
    || "" //empty string
    )
    console.log("Something is wrong."); //this will not print

var o = {x:1};
var p = {x:1};
console.log(o == p); // Objects can never be equal, even if properties are equal.
                     // They both reference different places in memory
p = o; //However, we can make p reference the same object as o
p.newProp = "I'm a property of O and P!"; //Add a new property to the object p refers to
console.log(o.newProp); // o now has the property p created; they refer to the same memory
console.log(o == p); //true

// This also demonstrates that, to copy an object (arrays are objects), you must copy all properties
var a = [1,3,5,7];
var b = [];
for(var i = 0; i < a.length; i++)
    b[i] = a[i];
console.log(b);

function equalArrays(arr1, arr2) { // To check if two objects are equal, we must compare their properties/elements
    if(arr1.length != arr2.length)
        return false;
    for(var i = 0; i < arr1.length; i++)
        if(arr1[i] != arr2[i])
            return false;
    return true;
}
console.log(equalArrays(a,b));
console.log(equalArrays(a,[3,4,5]));


// Conversions to String
var n = 367;
console.log(
    n.toString(),
    n.toString(2), //binary
    n.toString(8), //octal
    n.toString(16) //hex
    );

n = 1344526.78567;
console.log(
    n.toFixed(0), //0 digits after decimal
    n.toFixed(2),
    n.toExponential(4), //expresses in scientific notation, with 4 digits after decimal
    n.toPrecision(10) //expresses as specified number of significant figures
    );

console.log(
    parseInt("5 eggs"),
    parseInt("0xff3"),
    parseInt("4.56"),
    parseFloat("0.1"),
    parseFloat(".1") //Typically, NaN, cannot start with a `.` In some browsers, however, this works.
    );

console.log( {x:4, y:20, z:"HeLLo"}.toString() ); //All objects have a toString() method
console.log(equalArrays.toString()); //even functions have toString()


// Scope
var scope = "global";
function checkScope() {
    var scope = "local"; // declaring `var scope` hides the global variable `scope`
    return scope;
}
console.log(checkScope()); // prints "local"

/*NOTE: DO NOT omit the `var` keyword. Technically, it can be omitted at the global scope
when using non-strict JS; however, inside of a function, omitting `var` before a function
declaration/initilization will add that variable to the GLOBAL scope, and if that variable
already exists in the global scope, it will modify that global variable instead of creating
and working with its own, function-specific-scoped variable. */

// Highly recommended: read Ch. 3.10 ("Variable Scope") in the book; it is more detailed and important.