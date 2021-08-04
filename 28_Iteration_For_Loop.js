// LOOPS : allow you to perform repetitive tasks

// Gym Example:

// for loop keeps running while the condition is TRUE 
for (let rep = 1; rep <= 10; rep++) {
    console.log('Lifting weights repition 1');
}
// This will log the string ten times.

// But how do you dynamically change the number on the string?
// You can make a template literal and call the value of 'rep'
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}