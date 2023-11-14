function sumOfOddNumbers(num) {
    let sum = 0;
    let counter = 0;
    
    for (i = 1; i >= 1; i++) {
        if (i % 2 != 0) {
            console.log(i);
            sum += i;
            counter++;
            if (counter === num) {
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3)