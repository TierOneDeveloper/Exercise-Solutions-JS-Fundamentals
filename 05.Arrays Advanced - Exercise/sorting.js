function sorting(array) {
    let result = [];
    array.sort((a, b) => a - b);

    while (array.length > 0) {
        result.push(array[array.length - 1]);
        array.pop(array[array.length - 1])
        result.push(array[0]);
        array.shift(array[0])
    }
    console.log(result.join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])