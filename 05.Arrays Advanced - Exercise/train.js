function train(input) {

    let wagons = input.shift().split(" ").map(Number);
    let capacity = Number(input.shift());
    let cycles = input.length;

    for (let i = 0; i < cycles; i++) {
        let command = input.shift().split(" ");
        command.length === 2 ? command[1] = Number(command[1]) : command[0] = Number(command[0]);
        if (command[0] === "Add") {
            wagons.push(command[1]);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + command[0] <= capacity) {
                    wagons[j] += command[0];
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}

// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])