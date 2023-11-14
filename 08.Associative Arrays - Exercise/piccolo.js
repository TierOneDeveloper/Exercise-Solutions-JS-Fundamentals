function piccolo(arr) {

    let parkingLot = {};

    for (let row of arr) {
        let command = row.split(", ").shift();
        let number = row.split(", ").pop();
        parkingLot[number] = command;
    }

    let entries = Object.entries(parkingLot);
    let result = [];

    for (let [number, command] of entries) {
        if (command === "IN") {
            result.push(number);
        } else if (command === "OUT") {
            delete parkingLot[number];
        }
    }

    if (Object.keys(parkingLot).length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        result.sort((a, b) => a.localeCompare(b));
        for (each of result) {
            console.log(`${each}`);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'])