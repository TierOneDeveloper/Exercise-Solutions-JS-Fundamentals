function bombNumbers(numbers, bombInfo) {
    let bomb = bombInfo.shift();
    let bombPower = bombInfo.shift();
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === bomb) {
            let start = Math.max(0, i - bombPower);
            numbers.splice(start, (bombPower * 2 + 1));
            i = 0;
        }
    }

    for (each of numbers) {
        sum += each;
    }

    console.log(sum);
}
// bombNumbers([1, 2, 1, 1, 1, 2, 2, 2, 2], [2, 3])
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [2, 3])
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])