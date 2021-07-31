// FUNCTION : a piece of code that we can reuse over and over again in our code. It's like a variable but it hold chunks.

// let's now declare our first function
// let's call the 'function' method then followed by the name of the function.
function logger() {
    console.log('My name is John'); // this is the body of the funtion. 
}

// we can now use this function as many times as we want. 
// to call/run/invoke the function, we simply write the function name followed by parenthesis. 
logger();
logger();
logger();
// this will log 'My name is John' three times because we called the function three times.

// Usually when we use functions, we pass data to a function. 
// A function can also return data as well. 
// Think of functions as machines. 

// let's try this out

// PARAMETERS : are variables that are specific to a function. 

function fruitProcessor(apples, oranges); /* these two parameters will be defined once the function is called. They represent the input data of this function. */ {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // this 'juice' will become the result of executing the function.
}
// now let us invoke this function
fruitProcessor(5, 0); // the parameters is the input for the function. These are called the ARGUMENTS
// this will log '5, 0' because of the console.log line inside the function in line 25
// If you want to use the 'juice' value that was returned, we need to store in in a variable. We need to 'capture' it.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // this will log 'Juice with 5 apples and 0 oranges.'
// We can also log it directly to the console
console.log(fruitProcessor(5, 0)); // this will log the same string. We did not capture the value in a variable. 

// We can now use this function with different arguments
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// As you can see, console.log() is a built in function and so is Number()