'use strict';
// this is to avoid accidental bugs 
// forbids to do certain things and creates visible error on the dev console. 

// lets try this out

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // notice how the variable is missing an 's'
if (hasDriversLicense) console.log('I can drive');

// the console will give an error that hasDriverLicense' is not defined in line 10
// This is the purpose of the 'strict mode' 

// 'strict mode' also forbids reserved words to be used in the future. For example...
const interface = 'Audio';
// console will give an error because 'interface' is a JS reserved word.
const private = 534;
// this will also not work because 'private' is a reserved word.
const if = 23;
// you cannot use 'if' because it's already a reserved variable.

// from now on, we will assume that 'strict mode' is always turned on. 
