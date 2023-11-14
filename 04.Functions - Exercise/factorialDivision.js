function factorialDivision(first, second) {

    function factorial(number) {
        let product = 1;
        // 6! = 6.5.4.3.2.1
        for (let i = 1; i <= number; i++) {
            product *= i;
        }
        return product;
    }

    let firstFactorial = factorial(first);
    let secondFactorial = factorial(second);
    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);