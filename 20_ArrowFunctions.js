// from previous example

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Let's now do an ARROW FUNCTION
birthYear => 2037 - birthYear;
// now let's store in a variable to be able to use it
const calcAge3 = birthYear => 2037 - birthYear; // Interpretation : it's a value that we assigned to a variable 'calcAge3'.
// this is useful for shorter one liner functions. 

// Now to call this function...
const calcAge3 = birthYear => 2037 - birthYear; // defining the function
const age3 = calcAge3(1991); // assigning the function to a variable
console.log(age3); // loggin that variable. 
// This will log 46

// Let's say we want to calculate how many years are left until retirement...
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));
// this will log '19' (years until retirement)

// What if we have mutiple parameters?
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`; // using TEMPLATE LITERALS
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// So what type of function should I REALLY use? It always depends on the situation. 
