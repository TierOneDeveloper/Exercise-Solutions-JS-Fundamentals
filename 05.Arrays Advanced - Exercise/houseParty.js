function houseParty(input) {

    let guestList = [];
    let cycles = input.length;

    for (let i = 0; i < cycles; i++) {
        let command = input.shift().split(" ");
        let name = command[0];

        if (command.length === 3) {

            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }

        } else if (command.length === 4) {

            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join("\n"));
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'])
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])

