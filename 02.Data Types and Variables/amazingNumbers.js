function amazingNumbers(number) {
    let numberAsString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    let sumAsString = sum.toString();
    let isAmazing = false;

    for (let j = 0; j < sumAsString.length; j++) {
        if (Number(sumAsString[j]) === 9) {
            isAmazing = true;
        }
    }

    if (isAmazing === true) {
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }
}

amazingNumbers(1233)
amazingNumbers(999)
amazingNumbers(123413456)
amazingNumbers(1234134563)