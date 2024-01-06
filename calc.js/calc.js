function calc(firstNum = 1, secondNum = 1, mathOperator) {
    if (typeof secondNum === 'string') {
        mathOperator = secondNum;
        secondNum = undefined;
    }
    if (mathOperator != '+' && mathOperator != '-' && mathOperator != '*' && mathOperator != '/') {return "Error: Please input valid operator."};
    if (firstNum === undefined) {firstNum = 0}
    if (secondNum === undefined) {
        if (mathOperator == '*' || mathOperator ==  '/') {secondNum = 1} else {secondNum = 0}
    };
    let answer;
    switch (mathOperator) {
        case '+':
            answer = firstNum + secondNum;
            break;
        case '-':
            answer = firstNum - secondNum;
            break;
        case '*':
            answer = firstNum * secondNum;
            break;
        case '/':
            answer = firstNum / secondNum;
            break;
        
    }; console.log(typeof secondNum === 'string'); return answer;
}

console.log(calc(10,5,'+')) //15
console.log(calc(10,"/"))   //10
console.log(calc (30,"*"))  //30
console.log(calc (2,"+"))   //2
console.log(calc (3,"-"))   //3
