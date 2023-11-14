function addAndSubtract(first, second, third) {

    function sum(num1, num2) {
        let sum = (num1, num2) => num1 + num2;
        return sum(num1, num2);
    }

    function subract(num1, num2) {
        let subtract = (num1, num2) => num1 - num2;
        return subtract(num1, num2);
    }

    let result = sum(first, second);
    let finalResult = subract(result, third);

    return finalResult;
}

console.log(addAndSubtract(23, 6, 10));
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
