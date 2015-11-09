//Alex Goldstein
//Learning Javascript with "Javascript: The Definitive Guide," 6th Edition.
//Chapter 2

/*
Not much code -- discusses case-sensitivity, character sets, whitespace, 
escape sequences, normalization, comments, literals, reserved words.

Semicolons are optional in JS; it will assume one line out of the longest sequence 
of complete  lines it can find which make for coherent code. It really isn't recommended to 
leave them out, however; because missing semicolons leave it up to JS to interpret the meaning.
*/

// Example 1:
var a
a
=
3
console.log(
    a)
/*
Same as:
var a;
a = 3;
console.log(a);
*/

// Example 2
var n = 10;
var m = 20;
n
++
m
// The code is parsed as `n; ++m;` 

// Example 3:
/* // Commented out because I don't want to `return;` here
return
true
*/
// This is the same as saying `return; true;`, which is not the same as what you probably meant: `return true;`

// Example 4:
/*
var x = 4
var f = 10
var b = 10;
var y = x + f
(a+b).toString();
*/
// This will not run, because it tries to run `f(a+b).toString()` to assign the value to `y`.

// It may save a few seconds to leave out some semicolons, but it's not worth the possible (long) bug hunt.