// Looping through arrays.

const jonas = [
    'John',
    'Doe',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const typres = []; // empty array. Refer to line 24

// Let's log the content individually in the console

// jonas[5] does NOT exist, therefore the i should stay below 5
for (let i = 0; i < 5; i++) {
    console.log(jonas[i]);
};
// The problem here is that we hard coded the length of the array...
for (let i = 0; i < jonas.length; i++) { // now this will loop through the whole array even if we add or subtract some elements.
    console.log(jonas[i], typeof jonas[i]); // this will also log the type of each element in the array.
};

// Let's create an array of all the types of each element in the 'jonas' array. New empty array on line 11. 
for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types of array
    type[i] = typeof jonas[i]; // i will correspond to whatever the current iteration is. 
};
// this will log an array of the type of the keys in the object.



