const firstName = 'John';
const job = 'teacher';
const birthYear = '1991';
const year = '2037';

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // JS will convert this number to a string.
console.log(jonas);

// ES6 has something called TEMPLATE LITERALS to do this easier.
// TEMPLATE LITERALS can assemble multiple pieces into one string using BACKTICKS

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew); // this will log "I'm Jonas"
// this is easier because you don't have to keep adding quotations and plus operators 
// Let's continue...
const jonasComplete = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasComplete); // 'I'm John, a 46 year old teacher!'

// You can also use backticks for any regular string
console.log(`Just a regular string...`);

// Template Literals are also helpful for multiple line strings 
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`); // this will also work with multiple lines 