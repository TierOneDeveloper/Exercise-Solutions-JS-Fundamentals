function printAndSum(start, end) {
    let sum = 0;
    let string = "";

    for (i = start; i <= end; i++) {
        string += i + " ";
        sum += i;
    }
    console.log(`${string} `);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)