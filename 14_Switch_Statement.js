const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // without the break, it will log all the outputs. The code will continue executing. 
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code samples'); // this will apply to both wednesday and thursday
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day!'); // this will log if the value of 'day' is non of the above
}

// The console will log whatever is the assigned value of day in this switch block.

// Let's try this in an if-else block

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding setup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code samples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
} else {
    console.log('Not a valid day!');
}

