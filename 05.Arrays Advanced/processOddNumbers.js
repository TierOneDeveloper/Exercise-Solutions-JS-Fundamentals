function processOddNumbers(arr) {
    let oddPositionNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(i % 2 === 0)) {
            oddPositionNum.push(arr[i]);
        }
    }
    let result = oddPositionNum.map(x => x * 2).reverse();
    console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);