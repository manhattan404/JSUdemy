// from previous chapter

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018); // why the subtraction is done first before the comparison operator?

// Precedence Operator Table 
// MDN web docs 

console.log(25 - 10 - 5); // left to right operation.

let x, y; // two empty values that hold undefined
x = y = 25 - 10 - 5; // x = y = 10 
console.log(x, y); // this will log 10, 10. Because it is evaluated from right to left. 

// GROUPING : using parenthesis 

const averageAge = ageJonas + ageSarah / 2; // this will divide first before addition because of precedence
const averageAge = (ageJonas + ageSarah) / 2; // this will log 32.5 because of the parenthesis. 
console.log(ageJonas, ageSarah, averageAge);
