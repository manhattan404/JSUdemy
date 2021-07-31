// Let's write a function that calculates age based on birth year.

function calcAge1(birthdayYear) {
    const age = 2037 - birthdayYear;
    return age;  // to take this value out of the function, we RETURN it.
}
// to make this shorts, we can do it this way...

function calcAge1(birthdayYear) {
    return 2037 - birthdayYear;
}
// now let's call this function
calcAge1(1991); // this will now create a value that is returned in the function. 
// Now we need to capture/save that value into a variable.
const age1 = calcAge1(1991);
console.log(age1);
// this will log '46'

// let's create a FUNCTION EXPRESSION
// instead of naming the function, we store it in a variable 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
// To call this function...
const age2 = calcAge2(1991);
console.log(age1, age2); // passing the variables as parameters.
// this wil log '46 46'.

// These two types will be useful in the future. 

// What are the main differences between FUNCTION DECLARATION and FUNCTION EXPRESSION? 
// Function Declaration can be called before they are defined in the code. For example.

const age1 = calcAge1(1991); // <-- the function is called before it's defined. This will still work but may not be the best practice. 


// defining the function
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Now let's try it with an expression

const age1 = calcAge1(1991);
const calcAge2 = function (birthdayYear) {
    return 2037 - birthdayYear;
}
// this will log 'cannot access 'calcAGe2' before initialization.

// Which of the two should I use? It's a matter of personal preference.