function arrayModifier(arr) {
    let startArray = arr.shift().split(" ").map(Number);
    let command = arr.shift();

    while (command != "end") {
        let operation = command.split(" ");
        let first = Number(operation[1]);
        let second = Number(operation[2]);

        switch (operation[0]) {
            case "swap":
                let removed = startArray.splice(first, 1, startArray[second]);
                startArray.splice(second, 1, removed[0]);
                break;
            case "multiply":
                let product = startArray[first] * startArray[second];
                startArray[first] = product;
                break;
            case "decrease":
                startArray = startArray.map(x => x - 1);
                break;
        }
        command = arr.shift();
    }
    console.log(startArray.join(", "));
}

// arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end'])
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )