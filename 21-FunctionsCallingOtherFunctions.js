// Let's take the previous juice maker exmaple 

function fruitProcessor(apples, oranges); {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// Let's simulate so the the fruits have to be cut into smaller pieces first before being blended. 

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges); {
    const applePieces = cutFruitPieces(apples); // calling the function inside another function
    const orangePieces = cutFruitPieces(oranges); // calling the function inside another function
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
// This will log 'Juice with 8 pieces of apple and 12 pieces of orange'.

