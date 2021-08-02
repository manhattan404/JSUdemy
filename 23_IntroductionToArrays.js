// Let's say we want to store a friend's info so we can access it later

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// ARRAY : a big container where we can throw variables to store them.

const friends = ['Michael', 'Steven', 'Peter']; // More commonly used. 
console.log(friends);
// this will log all the values in the array

// Another way to use array. Array function. Use 'new' keyword/ 
const years = new Array(1991, 1984, 2008, 2020); // An array can hold as many values as we want and hold any type of value. 

// We need to have a way to get them out.
// What if we want to access the first name in the 'friend'?
console.log(friends[0]); // This will log 'Michael'
console.log(friends[2]); // This will log 'Peter'

//How to know the number of values in the array?
console.log(friends.length); // This will log '3'. The 'length' is a property when we talk about objects later.

// To get the last element of the array.
console.log(friends[friends.length - 1]); // This will calculate friends.length first then subtract 1 which will result to 2. 
// In this situation, JS expects a expression in the square bracket not a statement.

// We can also append and remove an element to the array...
// What if we want to remove Peter from the array?
// Now we can mutate the array
friends[2] = 'Jay';
console.log(friends);
// This will log '[Michael, Steven, Jay]
// You can still change the array even though it's in a 'const' because array is NOT a primitive value.
// But we cannot replace an entire array!!! For example...
friends = ['Bob', 'Alice'] // This is illegal

// Array can hold values of different types at the same time.
const firstName = 'Jonas'
const jonas = [firstName, 'Doe', 2037 - 1991, 'teacher', friends] // We can put 2037-1991 here because arrays expect an expression 
console.log(jonas);
console.log(jonas.length); // this will log '5'

// Exercise 

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
calcAge(years); // This WILL NOT work because the function wouldn't know what to do with the array. 
console.log(calcAge(years)); // this will log 'NaN'

// We cannot do operations with array



// Let's calculate the age 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[0]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
// this will log '47 70 19'

// You can also put function calls in an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
// This will log '(3) [47, 70, 19]'


