/* 
write a function called vendingMachine
it should take 2 arguments:
– number for the amount of money entered
– number which refers to a snack you want to buy

It should return 
"You -snack- has been served", instead of a -snack- it should output 
a name of selected snack

If selected snack is not available in the vending machine it should return
"Sorry, selected snack is not available"

If selected snack is more expensive than the money amount given it should return
"Sorry, you have to insert more coins"

This is the content of our vending machine:
1. Espresso, cost: 1€
2. Cappuccino, cost: 2,50€
3. Chocolate bar, cost 2€
4. Potato chips, cost 3,50€
*/

function vendingMachine (money, snack) {
    // see if money is valid
    if (typeof money !== `number` || isNaN(money) || money < 0) {
        return "Please input valid number"
    }
    // see if snack is valid
    if (snack != 1 && snack != 2 && snack != 3 && snack != 4) {
        return "Sorry, selected snack is not available"
    }
    // create snack list (list of objects, with name and price values in their properties)
    const SnackList = {
        1: {
            snackName: "Espresso",
            snackPrice: 1
        },
        2: {
            snackName: "Cappuccino",
            snackPrice: 2.5
        },
        3: {
            snackName: "Chocolate bar",
            snackPrice: 2
        },
        4: {
            snackName: "Potato chips",
            snackPrice: 3.5
        }
    };
    // check if you have enough money
    if (money < SnackList[snack].snackPrice) {
        return "Sorry, you have to insert more coins"
    };
    // calculate change
    let change  = money - SnackList[snack].snackPrice;
    console.log(SnackList[snack])
    // give answer using snack name and change
    return `Your ${SnackList[snack].snackName.toLowerCase()} has been served, and your change is ${change}€`    
}

console.log(vendingMachine(300, 2))