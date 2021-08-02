// Let's review an array

const jonasArray = [
    'John',
    'Doe',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'] /*An array inside an array*/
];

// Now let's turn this into an OBJECT with KEY-VALUE pairs. 
// KEY : is the variable name
// VALUE : can be of any type that you want

const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    age: 2037 - 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven']
};
// This object 'jonas' has five properties.
// The order of these values does not matter at all when we want to retrieve them. 
// There are many of creating an object.
// This is called the OBJECT LITERAL SYNTAX because we are literally writing down the key-value pairs