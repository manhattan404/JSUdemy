// EXPRESSION : a piece of code that produces a value
// for example...

3 + 4 // this is an expression because it will produce a value of 7 
1991 // this is also an expression because this will produce a value as well
true && false && !false // this is also an expression because in the end, this will produce a boolean value



// STATEMENTS : a bigger piece of code which DOES NOT produce a value on itself

// to better understand this, a DECLARATION is like a complete sentence
// EXPRESSIONS are like the words that make up the sentence.

// We write our programs as sequence of actions and these actions are statements. 

if (23 > 10) {
    const str = '23 is bigger'; // this string is a statement because it doesn't really produce a value.
}

// In TEMPLATE LITERALS, you can only insert expressions and not statements.
console.log(`I'm ${2037 - 1991} years old.`)

// If we have a variable...
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}.`) // this will also be an exxpression. 

