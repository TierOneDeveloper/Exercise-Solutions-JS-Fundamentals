function ladybugs(arr) {
    let fieldSize = arr[0];
    let field = [];
    field.length = fieldSize;
    let ladybugsIndexes = arr[1].split(" ").map(Number);

    for (let i = 0; i < ladybugsIndexes.length; i++) {
        if (ladybugsIndexes[i] < fieldSize && ladybugsIndexes[i] >= 0) {
            field[ladybugsIndexes[i]] = 1;
        }
    }

    for (let j = 0; j < field.length; j++) {
        if (field[j] != 1) {
            field[j] = 0;
        }
    }

    for (let k = 2; k < arr.length; k++) {
        let command = arr[k].split(" ");
        let ladybugsToMove = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);

        if (field[ladybugsToMove] === 1 && (ladybugsToMove >= 0 && ladybugsToMove < fieldSize)) {
            if (direction == "right") {
                field[ladybugsToMove] = 0;

                while (field[ladybugsToMove + step] === 1) {
                    ladybugsToMove += step;
                }
                if (field[ladybugsToMove + step] === 0) {
                    field[ladybugsToMove + step] = 1;
                }
            } else if (direction == "left") {
                field[ladybugsToMove] = 0;

                while (field[ladybugsToMove - step] === 1) {
                    ladybugsToMove -= step;
                }
                if (field[ladybugsToMove - step] === 0) {
                    field[ladybugsToMove - step] = 1;
                }
            }
        }
    }
    console.log((field.join(" ")));
}

ladybugs([6, "0 2", "0 right 2"]);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
// ladybugs([1, "0 1 2 3 4", '0 right 3', '3 left 3', '1 left -2'])
// ladybugs([20, '0 1 5 10 19 20', '0 left 3', '1 right 3', '10 right 2', '19 left 5', '20 right 1', '20 left 1']);
// ladybugs([20, '0 1 5 10 19 20', '0 left 3', '1 right 3', '10 right 2', '19 left 5', '20 right 1', '0 right 7']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);


// let sliced = field.slice(0, fieldSize);
// console.log(sliced.join(" "));