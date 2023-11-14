function magicSum(arrOfIntegers, number) {
    let pair = [];

    for (let i = 0; i < arrOfIntegers.length; i++) {
        for (let j = i + 1; j < arrOfIntegers.length; j++) {
            if (arrOfIntegers[i] + arrOfIntegers[j] === number) {
                pair = [arrOfIntegers[i], arrOfIntegers[j]];
                console.log(pair.join(" "));
            }
        }
    }
}

// magicSum([1, 7, 6, 2, 19, 23], 8)
// magicSum([14, 20, 60, 13, 7, 19, 8], 27)
// magicSum([1, 2, 3, 4, 5, 6], 6)
