// Remember that OBJECTS can hold different data. They called hold arrays and even another object.
// Remember that functions are really just another type of VALUE therefore, we can create a KEY-VALUE pair where the value is a function.
// Therefore, we can infact add functions to objects.

const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) { // In here, we can simply the function as an expression. That works because an expression produces a value.
        return 2037 - birthYear;
    } // this calcAge is not a regular variable anymore but a property of the 'jonas' object.
};

// Any function that is attached to an object is called a METHOD. 

// the above function is the same as this...
const calcAge = function (birthYear) { // this syntax would not work above because this is a DECLARATION.
    return 2037 - birthYear;
}

// We can access this calcAge property as well...
console.log(jonas.calcAge(1991)); // this will log '46'
console.log(jonas['calcAge'](1991)); // this will log '46'

// What if you don't want to pass parameters? You can use the 'this' 
const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () { // You don't need to pass a parameter anymore because we will use 'this'
        console.log(this); // This will log the whole object because 'this' is referring to itself 
        return 2037 - this.birthYear; // referring to the 'birthYear' of itself.
        // Now you don't have to keep passing arguments because it will referring to the value of 'birthYear' each time. 
    }
};

console.log(jonas.calcAge());

// But why do we need this? Because if we change the name of the object to 'jonas2' then we would have to change all the instances of 'jonas' in the code and that will take a lot of time. If we use the 'this' method, we only have to change one. 

// But what if you have to access the age multiple times? Calculating it multiple times will not be efficient. 

const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear; // we essentially created a this.age and assigned an expression to it 
        return this.age; // we return the value to the function.
    }
};

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// Now, the calculation is only done one time and it is just accessing the value that is assigned to the key.

// Coding Challenge: 
// "Jonas is a 46-year old teacher, and he has a driver's license."

const jonas = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher'
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.getSummary());



