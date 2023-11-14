function nxnMatrix(number) {
    let numberAsString = number.toString() + " ";
    for (i = 0; i < number; i++) {
        console.log(numberAsString.repeat(number));
    }
}

nxnMatrix(3)
nxnMatrix(7)