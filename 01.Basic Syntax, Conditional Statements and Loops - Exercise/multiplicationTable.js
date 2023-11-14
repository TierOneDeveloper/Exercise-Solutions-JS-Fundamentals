function multiplicationTable(number) {
    for (row = 1; row <= 10; row++) {
        let result = number * row;
        for (column = row; column <= row; column++) {
            console.log(`${number} X ${row} = ${result} `);
            // break;
        }
    }
}

multiplicationTable(5)