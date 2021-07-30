// FALSY VALUES : values that are not exactly false but will become false when we try to convert them to a boolean

// 5 Falsy Values: 0 , '', undefined, null, NaN

// everything else is Truthy Values 

console.log(Boolean(0)); // this is a Falsy value
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // an empty object
console.log(Boolean(''));

/*

false
false
true - that's why we say that a string that is not en empty string is a TRUTHY value
true
false - because it's an empty string

*/

// Boolean function is not usually used.  

// Let's look at how type coercion works in an if-else statement...

const money = 0; // let's test if the person has anymoney or not...
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}
// this will log "You should get a job"...but why?
// Since 0 is a Falsy value, the boolean is false and therefore executing the 'else' block. 
// what if the value of 'money' is set to 100? The it is a true value and therefore executing the 'if' block.
// It will log 'Don't spend it all'. 

// Let's test this in another example...

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}
// This will log 'Height is undefined' because the variable 'height' has an empty value
// What if we put a value into it?

let height = 56;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

// this will log 'YAY! Height is defined'. 

// However, we can run into a problem. What if we set the value of height to 0? Remember that 0 is a perfectly valid number
let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}

// this will log 'Height is undefined' because remember that 0 is a FALSY value.