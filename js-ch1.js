//Alex Goldstein
//Learning Javascript with "Javascript: The Definitive Guide," 6th Edition.

// These are comments in Javascript.
/* These are block comments. 
 * Stars not required but I like the effect on readability.
 */
 
var x; // Declares variable x
x = 0; // Initializes x with value of 0

// Vars hold any type of object.
x = 1;
x = .99;
x = "Hey, you.";
x = false;
x = null;
x = undefined;

// Functions take this form:
function plus1(x) {
    return x+1;
}
// ...alternatively:
var plus1 = function(x) {
    return x+1;
}; // <-- Note the semicolon in this verison, because it's a statement (assignment), too.

plus1(5); //Run the function plus1();
console.log(plus1(5)); // Print to the console

x = []; // An empty array.
x[0] = "First! ...really?";
console.log(x[0]);

x[2] = "Where's the second index?";
console.log(x); // This only prints the elements that exist: => [ 'First! ...really?', 'Where\'s the second index?' ']

x[1] = "It's easy to add new indices to Javascript arrays.";

// Array Methods
x.push(1,3,"HI"); //Add to the end of the array x
console.log(x);
x.reverse(); //Reverse array x
console.log(x);

// We can also define our own methods
x.concat2 = function() { // Notice, however, that this only defines concat2 for x
    var elem0 = this[0];
    var elem1 = this[1];
    return elem0 + elem1;
};
console.log( x.concat2() );


// Defining Classes
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(3,7); // Create objects from class definition using "new" keyword
var q = new Point(4,8);

p.dist = function() { // Defines dist() for p. Does not define dist() for all objects of class Point, however.
    return Math.sqrt(
        Math.pow(this.x,2) + Math.pow(this.y,2)
        );
};
console.log(p.dist()); //Defined for p
//console.log(q.dist()); // Error: dist() not defined for q
delete p.dist; //Deletes the property dist from p

// Instead, we can define methods for ALL objects of a class
Point.prototype.dist = function() { // Add new methods to the entire class by using its prototype
    return Math.sqrt(
        Math.pow(this.x, 2) + Math.pow(this.y, 2)
    ); // Yes, we can separate lines like this, if it helps readability.
};
console.log(p.dist()); // Notice how, even though p and q were created before dist2() was prototyped,
console.log(q.dist()); // they can still access it. This is because the interpreter looks first in the object;
                        // then when it is not found, it checks the prototype as a last resort, where it finds dist2();

/* NOTE: It is best to add class methods using the prototype chain, as opposed to coding them directly into
 * the class definition. Using the prototype separates the methods from the object, forcing the interpreter to
 * look up the inheritance hierarchy to find the method's definition, rather than including a copy of these
 * methods in every object instance.
 */


