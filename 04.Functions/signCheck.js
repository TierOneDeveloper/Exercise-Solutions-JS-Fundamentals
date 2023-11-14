function signCheck(numOne, numTwo, numThree) {

    function multiply(num1, num2) {
        let result = (num1, num2) => num1 * num2;
        return result(num1, num2);
    }

    function isPositiveOrNegative(output) {
        if (output > 0) {
            console.log("Positive");
        } else {
            console.log("Negative");
        }
        return;
    }

    let firstproduct = multiply(numOne, numTwo);
    let result = multiply(firstproduct, numThree);
    isPositiveOrNegative(result);
}
// console.log(signCheck(5, 12, -15));
// console.log(signCheck(-6, -12, 14));
// console.log(signCheck(-1, -2, -3));
// console.log(signCheck(-5, 1, 1));

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
