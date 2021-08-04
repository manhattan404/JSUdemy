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

// Another way of doing this...
for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // this will append it
    typres.push(typeof jonas[i]);
}

// Let's try another practical example.

const years = [1991, 2007, 1969, 2020];
// let's calculate the ages for this birth years and store them in a new array.
const ages = [];

for (let i = 0; i < years.length; i++); {
    ages.push(2037 - years[i]); // we will push this value to the empty array above. 
}
console.log(ages); // this will log the calculated ages in the array. 

// CONTINUE and BREAK STATEMENT

// CONTINUE : to exist the current itiration fo the loop and continue to the next one.
// BREAK : used to completely terminate the whole loop. 


// What if we only want to log the elements that are strings? We can use the CONTINUE statement
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; // "If the type of current element is not a string, then continue"
    console.log(jonas[i], typeof jonas[i]);
}


// BREAK 
// What if we don't want to log any other elements after we found a number?
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}