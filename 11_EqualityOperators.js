const age = 18;
if (age === 18) console.log("You just became an adult"); // You don't need curly braces if it's only one line. 
// this will log "You just became an adult"

// Doing this in a console
18 === 18 // this will log 'true'
18 === 19 // this will log 'false' 

// Take note : don't confuse the assignment operator which is a single '=' to a equality operator which is a triple '==='.
// The triple equal sign '===' is called the STRICT EQUALITY OPERATOR because it does not perform type coercion. It only returns true if BOTH values are the same. 


// We also have a LOOSE EQUALITY OPERATOR which is a double equal sign '=='. It performs type coercion. For example...
'18' == 18 // this will log 'true' because it performed a type coercion. It will convert the string 18 to a number 18. 
// Now let's try this...
'18' === 18 // this will log 'false' because the string 18 cannot be converted to number 18.

const age = 18;
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

// these are both TRUE 

// What if we changed the number 18 to a string of 18?

const age = '18';
if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

// On the second line (loose) will log because the first one is a strict comparison. 

// Take note :  as a general rule for clean code, avoid the loose equality operator as much as you can.
// When comparing values, use strict equality operator for the most part. 

prompt("What is your favorite number?"); // This will ask the user to enter a value. But we need to store this value...
// Let's store it...
const favourite = prompt("What is your favorite number?");
console.log(favourite); // this will now log the value after you enter it. But it will be a string not an actual number. 
console.log(typeof favourite); // this will log 'string' 

if (favourite == 23) {
    console.log('Cool! 23 is an amazing number!')
} // Since we used a double equal (loose), this will log it because JS will perform a type coercion.
// if we used a triple equal, it will not log it because the '23' entered by the user is considered a string.

// So now we have to wrap it into a 'Number' function to convert the string entered by user to a number
const favourite = Number(prompt("What is your favorite number?"));
// Now the if statement will run because the input is now converted to a number therefore the triple equal operator will work.
// Of couse if you put a different value for the number, the if block will not work because the value is NOT STRICTLY equal to 23. 


// we can also add nother condition to the block which is an ELSE-IF block 

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) { // checks if the number entered is 7 besides 23 
    console.log('7 is also a cool number');
} else { // will log if non of the conditions above is met
    console.log('Number is not 23 or 7');
}
// You can keep adding 'else if' block as much as you want.

// There's also a DIFFERENT OPERATOR 

if (favourite !== 23) console.log('Why not 23?');
// this means if the input is NOT 23, then this will log 'Why not 23?'

// !== this is the strict version
// != this is the loose version
