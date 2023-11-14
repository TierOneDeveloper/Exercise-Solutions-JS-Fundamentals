function numbers(input) {
    let startArr = input.shift().split(" ").map(Number);
    let command = input.shift().split(" ");

    while (command[0] != "Finish") {
        switch (command[0]) {
            case "Add":
                startArr.push(Number(command[1]));
                break;

            case "Remove":
                let index = startArr.indexOf(Number(command[1]));
                if (index != -1) {
                    startArr.splice(index, 1);
                }
                break;

            case "Replace":
                let secondIndex = startArr.indexOf(Number(command[1]));

                if (secondIndex >= 0 && secondIndex <= startArr.length - 1) {
                    startArr.splice(secondIndex, 1, Number(command[2]));
                }
                break;

            case "Collapse":
                startArr = startArr.filter(el => el >= Number(command[1]));
                break;
        }
        command = input.shift().split(" ");
    }
    console.log(startArr.join(" "));
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"])
numbers(["1 20 -1 10", "Collapse 8", "Finish"])
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"])
