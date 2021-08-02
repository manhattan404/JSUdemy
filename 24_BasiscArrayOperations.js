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
friends.unshift();
console.log(friends);