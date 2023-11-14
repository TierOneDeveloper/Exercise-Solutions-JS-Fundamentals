function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (i = 0; i < numberAsString.length; i++) {
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }
    console.log(sum);
}

sumDigits(245678)