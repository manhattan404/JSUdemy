// 7 Primitive Data Types 

// Number : Floating point numbers. Used for decimals and integers 
let age = 23;

// String : Sequence of characters. Used for text 
let firstName = 'Jonas';

// Boolean : logical type that can only be true or false. Used for taking decisions
let fullAge = true;

// Undefined : value taken by a variable that is not yet defined. Empty value.
let children;

// Null : also mean empty value

// Symbol : Value that is unique and cannot be changed 

// BigInt : larger integers than the Number type can hold. 

// JS has dynamic typing, which means you don't have to manually define a data type unlike other programming languages.

// Variables can be changed from a number to a string. 

// You can comment out codes that you don't want to execute. 
// Press "Control + /" to comment out lines of codes. 
// you can also use /* */ = this is a multi line comment 

// ***** BOOLEANS ***** // 

let javascriptIsFun = true; // You have to use 'let' when declaring a new variable.
console.log(javascriptIsFun);
// this will log 'true' in the console

console.log(typeof true); // this will log 'boolean'. typeof is an operator.
console.log(typeof javascriptIsFun); // this will log 'boolean' because it is assigned to a boolean value 
console.log(typeof 23); // this will log 'number'
console.log(typeof "Jonas"); // this will log 'string'

// ***** DYNAMIC TYPING ***** //  

let javascriptIsFun = true;
javascriptIsFun = "YES!"; // No need to use 'let' because 'javascriptIsFUN' has already been declared. 

// ***** UNDEFINED ***** // 

let year;
console.log(year); // this will log 'undefined'
console.log(typeof year); // this will also log 'undefined'

year = 1991; // assigning a new value to the undefined variable 
console.log(typeof year); // this will log 'number' because you now assigned a new number

// check out this bug
console.log(typeof null); // this will log 'object' even though it's not an object.

