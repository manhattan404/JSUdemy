let // this can be used to declare a variable that can be changed later

    let age = 30;
age = 31;  // we mutated the variable 

let year; // empty value 
year = 1991; // mutated the value 

const // variables that are not supposed to change 
const birthYear = 1991;
birthYear = 1990; // this will log a type error because it is a constant. It is an immutable variable.
const job; // this is not legal because you cannot declare an empty const variable.  

// It is recommended to use const. Only use let if you really know a variable will change. 

