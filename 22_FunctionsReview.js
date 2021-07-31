const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    alreadyRetired = `${firstName} is already retired!`

    if (retirement > 0) {
        return retirement; // 'return' statement immediately ends the function  
        console.log(`${firstName} retires in ${retirement} years.`);
    } else {
        return -1;
        console.log(`${firstName} has already retired`);
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
// These will only log the numbers because the function stops at the 'return' statement on line 11 and 14.
// Therefore we need to put the console.log before the return statment. Press 'alt' + 'up' key
// Then it will log the string. 
