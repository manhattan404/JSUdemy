// TYPE CONVERSION : when you manually convert from one type to another
// TYPE COERCION : when JS automatically convert behind the scenes

// Let's start from TYPE CONVERSION 

const inputYear = '1991';
console.log(inputYear + 18); // this will concatenate '18' to '1991' because '1991' is a string. It will log '199118'
// we need a way of converting '1991' to a number...We can use the 'Number' function...
console.log(Number(inputYear)); // this will return '1991' as a number. However, the original variable 'inputYear' is still a string.
// Let's us now calculate...
console.log(Number(inputYear) + 18); // this will now log '2009'

// If you try to convert a string to a number that is impossible...
console.log(Number('John')); // this will log 'NaN' which stands for 'Not a Number'. This actually means an invalid number 
console.log(typeof NaN); // this will log 'number'. It's still a number somehow but an invalid one. 

// We can also do the opposite...

console.log(String(23)); // We need to call this fucntion with a capital S
// this will log it in white text since it's a string.

// JS can convert to a number, string to a boolean.


/* +++++ TYPE COERCION ++++++ */

console.log('I am ' + 23 + ' years old'); // this will log 'I am 23 years old'
// The plus operator here triggered a TYPE COERCION
// this is the same as writing this...
console.log('I am ' + '23' + ' years old');
// Let's look at another example...
console.log('23' - '10' - 3); // this will log '10' because JS triggered a type coercion due to the minus operator
// What if we did this...
console.log('23' + '10' + 3); // this will log '23103' because JS concatinated the strings.

console.log('23' * '2'); // this will log '46' because the multiplacation operator triggered a type coercion. Because that's the only way a multiplier can work
console.log('23' / '2'); // this will log '11.5' because that's the only way a division can work.

// Now let's try a logical operator 
console.log('23' > '18'); // this will log 'true' because that's the only way a 'greater than' operator can work. 

// Basically, the 'plus' operator converts values into strings. 

// Guess the output...
let n = '1' + 1; // this will log '11' because it coerced into a string
n = n - 1; // this will log '10' because 11 is now being subtracted and as we know, minus operator triggers a type coercion. 

// Let's try this...
console.log(2 + 3 + 4 + '5'); // this will log '95'.
console.log('10' - '4' - '3' - 2 + '5'); // this will log 15

// Keep in mind that Type Coercion can introduce a lot of bugs.