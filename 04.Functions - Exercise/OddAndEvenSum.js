function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    let array = numberAsString.split();
    let digits = array[0].split("");
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < digits.length; i++) {
        let currentDigit = Number(digits[i]);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)