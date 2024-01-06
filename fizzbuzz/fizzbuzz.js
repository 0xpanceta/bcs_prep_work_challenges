function fizzbuzz(number) {
    let loggedNumbers = [];
    for (let i = 1; i <= number; i++) {
        if(i%5 == 0 && i%7 == 0) {loggedNumbers.push("FizzBuzz")}
        if(i%5 == 0) {loggedNumbers.push("Fizz")}
        if(i%7 == 0) {loggedNumbers.push("Buzz")}
        loggedNumbers.push(i);
    };
    return loggedNumbers.join(', ')
}

console.log(fizzbuzz(40))