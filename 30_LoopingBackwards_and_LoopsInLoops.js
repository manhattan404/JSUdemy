const jonas = [
    'John',
    'Doe',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// Let's loop through this array backwards. 4, 3, ..., 0 
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
} // this will log the counter and then the array backwards. 

// A Loop inside a Loop 
// Let's go back to the gym example. Let's see we have 3 exercises and we have 5 reps for each exercise.  
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);

    // let's now make a loop inside a loop
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`)
    };
}