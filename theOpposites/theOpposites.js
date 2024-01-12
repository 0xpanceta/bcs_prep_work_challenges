// write a function which returns the opposite for a provided number:

//oppositeNum(10) 
// returns -10
//oppositeNum(-5) 
// returns 5

function oppositeNum (number) {
    if (typeof number !== `number` || isNaN(number)) {return "Please input valid number"} if (number == 0) {return 0}
    return number * (-1)
}

console.log(oppositeNum(10))
console.log(oppositeNum(-5))
console.log(oppositeNum(0))
console.log(0*(-1))