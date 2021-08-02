

const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2037 - 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// DOT NOTATION
console.log(jonas.lastName); // this will log the 'lastname' value 
// the DOT is an operator. 

//BRACKET NOTATION 
console.log(jonas['lastName']); // same result. 

// We can use the BRACKET NOTATION to make an expression 
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // this will log John
console.log(jonas['last' + nameKey]); // this will log Doe
// you cannot do this with the DOT NOTATION.