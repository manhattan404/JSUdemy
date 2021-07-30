const hasDriversLicense = true // variable A
const hasGoodVision = true // variable B 

console.log(hasDriversLicense && hasGoodVision); // && is the 'and' operator in JS 
// this will log 'true' because it's both true.

// now let's change one of them...
const hasDriversLicense = true; // variable A
const hasGoodVision = false; // variable B 

console.log(hasDriversLicense && hasGoodVision);
// this will log 'false' because one of them is false. 

// Now let's try this with the OR operator...

const hasDriversLicense = true; // variable A
const hasGoodVision = false; // variable B 

console.log(hasDriversLicense || hasGoodVision); // || means "OR" in JS
// this will log 'true' because one of them is true. 

// Let's use the 'NOT' operator 
console.log(!hasDriversLicense);
// this will log 'false' because it will invert the variable which has a 'true' value. 

// Let's now find out if Sarah is allowed to drive. 

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}

// We can also make the condition in the 'if' statement...

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}
// this will log the 'else' block because of we set the value of 'hasGoodVision' to false.

// Let's take it to the next level and add another boolean value...
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B 
const isTired = true; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired); // this will log 'true' because all of them are true 

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah can drive");
} else {
    console.log("Someone else should drive.");
}
// This will log the 'else' block because isTired is set to true. To fix this, we need to set it to false


const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B 
const isTired = false; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired); // this will log 'true' because all of them are true 

if (hasDriversLicense && hasGoodVision && !isTired) { //this will invert isTired to 'true' therefore making all 3 conditions true
    console.log("Sarah can drive");
} else {
    console.log("Someone else should drive.");
}
// this will log the 'if' block.

