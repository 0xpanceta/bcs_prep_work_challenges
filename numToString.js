// write a function which takes one argument which is a number
// and returns the same value as a string

// numberToString(10) 
// returns "10" 

function numberToString (number) {
    if (typeof number !== 'number' || !isNaN(number)) {return "Please enter a valid number"};
    return number.toString();
}

console.log(numberToString(10))