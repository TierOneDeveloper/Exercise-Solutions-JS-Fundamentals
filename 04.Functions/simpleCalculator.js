function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case 'multiply':
            return multiply(numOne, numTwo);
            break;
        case 'divide':
            return divide(numOne, numTwo);
            break;
        case 'add':
            return add(numOne, numTwo);
            break;
        case 'subtract':
            return subtract(numOne, numTwo);
            break;
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));
