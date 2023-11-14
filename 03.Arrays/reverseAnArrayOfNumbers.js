function reverseAnArrayOfNumbers(n, inputArr) {
    let newArr = [];
    let output = "";
    for (i = 0; i <= n - 1; i++) {
        newArr.push(inputArr[i]);
    }
    // console.log(newArr);

    for (let i = newArr.length - 1; i >= 0; i--) {
        output += newArr[i] + " ";
    }
    console.log((output));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])