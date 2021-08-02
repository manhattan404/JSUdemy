// METHODS - functions that we can apply to arrays. Array Operations.

const friends = ['Michael', 'Steven', 'Peter'];
// PUSH METHOD : adds element to the end of an array.
friends.push('Jay'); // PUSH is essentially a function.
console.log(friends); // length of the array is now 4 because it mutated the original array.

// If you want to find out the new length of the array, assign it to a new variable. 
const newLength = friends.push('Jay'); // 'the result of this function here, store it in a new variable
console.log(newLength); // this will log '4'

// To add element to the beginning of the array. 
friends.unshift('John');
console.log(friends); // this should now have 5 elements and Johnas first element. 

// To remove element from array
friends.pop(); // This will remove the last element of the array. We don't really need to pass anything. You can do it twice.
const popped = friends.pop();
console.log(friends); // Jay will be gone here.
console.log(popped);  // this will not return the length of the new array but it will return the removed element.

// Remove the first element
friends.shift();
console.log(friends);

// Tells which position a certain element is in the array
console.log(friends.indexOf('Steven')); // this will log '1'
// We try to get an element that is not in the array, it will log '-1'.

// ES6 Method. 'INCLUDE' tells if the element is in the array or not. It will log 'true' or 'false'. 
console.log(friends.includes('Steven')); // this will log 'true'
console.log(friends.includes('Bob')); // this will log 'false' 

// This method is a strict equality which means if you add a number and check for a string, it will return 'false'
friends.push(23); // this is a number
console.log(friend.includes('23')); // this will return false because you're checking for a string.  
console.log(friends.includes(23)); // this will return 'true'.

// we can use 'includes' method for conditionals.
if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

