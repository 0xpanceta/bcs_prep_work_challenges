// write a function noIVA which calculates the price without IVA which is 21%
// it takes one argument which is a number for total price with IVA
// and returns the number representing the price without IVA

// function takes 1 argument
// argument is a total price with IVA
// function subtracts iva from total price
// returns the price without iva

// noIva(242) 
// returns 200

function noIVA (price, IVA = 0.21) {
    if (typeof price !== 'number' || isNaN(price)) {return "Please enter a valid number";
}
    return price/(1+IVA)
}

console.log(noIVA(242))