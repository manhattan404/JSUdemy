// CONDITIONAL OPERATOR : also called the TERNARY OPERATOR because it has three parts. The condition, the 'if' part, and the 'else' part. 
// remember that an operator always produces a value, therefore it's an expression.

const age = 23;
age >= 18 ? console.log('I like to drink wine.') :
    console.log('I like to drink water.')
// ? is basically the 'if' and : is the 'else'

const age = 17;
const drink = age >= 18 ? 'wine' : 'water'; // we assigned the expression to a variable called 'drink'. 'drink' is now defined conditionally.
console.log(drink);
// without the conditional operator, we would have to use the if-else statement.


// Let's try to use the if-else method. 
let drink2;
if (age >= 18) { // remember that age has to be defined outside of the block
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// Now we can use the TERNARY OPERATOR with a TEMPLATE LITERAL 
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}.`);
// this will log 'I like to drink wine' because the value of age is 23 above.

// Take note that the ternary operator is not a replacement of the if-else statement. 

