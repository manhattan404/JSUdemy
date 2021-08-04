for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repition ${rep}`);
}


let rep = 1;
// We can only specify the condition in a while loop
while (rep <= 10) { //" We want to keep the loop running while rep is less than or equal to 10"
    console.log(`WHILE: Lifting weights repition ${rep}`);
    rep++;
}
// This means that the WHILE loop is more versatile than the for loop. That's because we don't really need a counter

// Let's make an example that does not depend on a counter but depends on a random number. 
// Basically, we're going to roll a die and we'll keep rolling the dice until we get a 6, then when we rolled a 6, we stop. 
// That means we don't know the number of times the dice is going to roll so we don't really have a counter. 
let dice = Math.trunc(Math.random() * 6) + 1; // this will log a random number each time. 
console.log(dice); // this will log a whole number

while (dice !== 6) /* "While dice is NOT equal to 6" */ {
    console.log(`You rolled a ${dice}`); // this line will log all numbers except 6
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...'); // this is when the dice actually rolled 6
}

