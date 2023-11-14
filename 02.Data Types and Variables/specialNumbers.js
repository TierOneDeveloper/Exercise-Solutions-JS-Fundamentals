function specialNumbers(num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        let numAsString = String(i);
        for (j = 0; j < numAsString.length; j++) {

            let currentDigit = numAsString[j];
            let currentDigitAsNumber = Number(currentDigit);
            sum += currentDigitAsNumber;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
}

specialNumbers(20)