// OPERATOR : allows to transform values or combine multiple values. 

/* Types of operators:
 1. Mathematical
 2. Logical 
 3. Comparison
 4. Assignment
 etc...
*/

// MATHEMATICAL or Arithmetic Operators 

const ageJonas = 2037 - 1991;
console.log(ageJonas); // this will log 46 

const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah); // you can add more properties 
// notice how 2037 is repeating. We don't want that. What we can do is assign it to a variable.
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // this should log the same results.

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // doing another operation in one console.log 
// 2 ** 3 means 2 to the power of 3.

// CONCATINATION 

const firstName = 'John';
const lastName = 'Doe';
console.log(firstName + lastName) // this will log 'JohnDoe' 
// If you need a space, conatenate another string with a space 
console.log(firstName + ' ' + lastName); // this will log 'John Doe' 
// a better way of concatenating strings is template strings. 

// Assignment Operators 

let x = 10 + 5; // the equal sign is an operator as well. x will be assigned 15 
console.log(x); // 15
x += 10; // means x = x + 10 
console.log(x); // 25 
x *= 4; // means x = x * 4 = 100
x++; // x = x + 1
x--; // decrease the value by 1. Will result to 99

// Comparison Operators ; used to create boolean values 
console.log(ageJonas > ageSarah); // this will log 'true' because Jonas' age is greater than Sarah's
console.log(ageSarah >= 18); // this will log 'true' 
// In real development world, we would store this values in a variable. Not in console.
const isFullAge = ageSarah >= 18; // then the variable 'isFullAge' will hold the boolean value 'true'

console.log(now - 1991 > now - 2018); // the same as the operation above. 





