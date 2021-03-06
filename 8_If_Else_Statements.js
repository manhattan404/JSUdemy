// Age checker if allowed to take driver's license. 

const age = 19;
const isOldEnough = age >= 18; // we now have a boolean value

// Interpretation: if the value that in the parenthesis is true, then the operation inside the curly braces will be executed. 
// If it's false, then it's not going to be executed. 
if (isOldEnough) {
    console.log('Sarah can start driving license 👌');
}


// You can also get rid of 'isOldEnough' variable...

const age = 19;
if (age >= 18) {
    console.log('Sarah can start driving');
} else { // this block of code will execute if the block of code about ise false.
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
} // if there is no else block, JS will move on tot he next line and log nothing. 
// this is called a 'CONTROLLED STRUCTURE' 

// Another example

const birthYear = 1998;

if (birthYear <= 2000) {
    let century = 20; // the variable inside this block will not be defined outside of the block
} else {
    let century = 21;
}
console.log(century); // this will give in error because century is not defined globally

// Now let us define 'century' globally...

const birthYear = 1998;
let century;
if (birthYear <= 2000) /* Insert the condition inside the parenthesis */ {
    century = 20; // the variable inside this block will not be defined outside of the block
} else {
    century = 21;
}
console.log(century); // this will log '20' because 'century' is now defined globally