

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
// When we have to 'compute' for the property name, then we have to use the BRACKET NOTATION. 

// Another example when we have to use BRACKET NOTATION. 
// let try it with the DOT NOTATION first...
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas.interestedIn); // this will log 'undefined' because there's no 'interestedIn' property in the object 'jonas'

// now let's try the BRACKET NOTATION 
console.log(jonas[interestedIn]); // this will log 'teacher' because it LOOKED for the key 'job' in the object.
// it worked because this expression will be evaluated 
// If you try to pass 'location' it will log 'undefined' because there is no 'location' property in the object.
// remember that 'undefined' is a FALSY value. 

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); // if the value passed is true, this will log
} else { /* if the value passed is not in the object, this will log */
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
}

// How to use both DOT and BRACKET NOTATION to add properties to an object
jonas.location = 'Portugal';
jonas['twitter'] = '@JohnDoe';
console.log(jonas); // this will add the location and twitter

// Coding Challenge
// "Jonas has 3 friends, and his best friend is called Michael."

// Solution: 
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}.`);
// this works because of the operator precedence.



