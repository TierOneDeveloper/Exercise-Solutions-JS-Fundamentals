function numbers(str) {
    let arr = str.split();
    let numbers = arr[0].split(" ").map(Number);
    let sum = 0;
    let greaterNumbers = [];

    for (let each of numbers) {
        sum += each;
    }

    let averageNumber = sum / numbers.length;

    for (let num of numbers) {
        if (num > averageNumber) {
            greaterNumbers.push(num);
        }
    }

    greaterNumbers.sort((a, b) => b - a);

    if (greaterNumbers.length > 5) {
        greaterNumbers.splice(5);
        console.log(greaterNumbers.join(" "));
    } else if (greaterNumbers.length >= 2) {
        console.log(greaterNumbers.join(" "));
    } else if (greaterNumbers.length === 1 && greaterNumbers[0] > averageNumber) {
        console.log(greaterNumbers.join(" "));
    } else {
        console.log("No");
    }
}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1 1 2')
numbers('-1 -2 -3 -4 -5 -6')