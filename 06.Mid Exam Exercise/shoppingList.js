function shoppingList(input) {
    let index = 0;
    let startGroceries = input[index].split("!");
    index++;
    let command = input[index];
    index++;

    while (command != "Go Shopping!") {
        let commandAsArr = command.split(" ");

        switch (commandAsArr[0]) {

            case "Urgent":
                if (startGroceries.includes(commandAsArr[1])) {
                    command = input[index];
                    index++;
                    continue;
                } else {
                    startGroceries.unshift(commandAsArr[1]);
                }
                command = input[index];
                index++;
                break;
            case "Unnecessary":
                if (startGroceries.includes(commandAsArr[1])) {
                    let currentIndex = startGroceries.indexOf(commandAsArr[1]);
                    startGroceries.splice(currentIndex, 1);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                command = input[index];
                index++;
                break;
            case "Correct":
                if (startGroceries.includes(commandAsArr[1])) {
                    let currentIndex = startGroceries.indexOf(commandAsArr[1]);
                    startGroceries.splice(currentIndex, 1, commandAsArr[2]);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                command = input[index];
                index++;
                break;
            case "Rearrange":
                if (startGroceries.includes(commandAsArr[1])) {
                    let currentIndex = startGroceries.indexOf(commandAsArr[1]);
                    let removed = startGroceries.splice(currentIndex, 1,);
                    startGroceries.push(removed);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                command = input[index];
                index++;
                break;
        }
    }
    console.log(startGroceries.join(", "));
}

// shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])
