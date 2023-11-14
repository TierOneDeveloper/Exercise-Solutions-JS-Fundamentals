function binaryToDecimal(eightBinary) {
    let result = "";
    let decimalNumber = 0;
    for (i = eightBinary.length - 1; i >= 0; i--) {
        result += eightBinary[i]
    }
    for (j = 0; j <= result.length - 1; j++) {
        let digit = Number(result[j]);
        decimalNumber += Math.pow(2, j) * digit;
    }
    console.log(decimalNumber);
}

binaryToDecimal("1101010101")
