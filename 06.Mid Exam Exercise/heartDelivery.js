function heartDelivery(input) {
    let hoodHouses = input.shift().split("@").map(Number);
    let command = input.shift();

    let startPosition = 0;

    while (command != "Love!") {
        let commandAsArr = command.split(" ");
        let step = Number(commandAsArr[1]);
        startPosition += step;

        if (startPosition >= hoodHouses.length) {
            startPosition = 0;
        }

        if (hoodHouses[startPosition] === 0) {
            console.log(`Place ${startPosition} already had Valentine's day.`);
        } else {
            hoodHouses[startPosition] -= 2;
            if (Number(hoodHouses[startPosition]) === 0) {
                console.log(`Place ${startPosition} has Valentine's day.`);
            }
        }
        command = input.shift();
    }

    console.log(`Cupid's last position was ${startPosition}.`);

    let sum = 0;
    let indexes = []

    for (let each of hoodHouses) {
        sum += Number(each);
        if (Number(each) !== 0) {
            let currIndex = hoodHouses.indexOf(each);
            indexes.push(currIndex);
        }
    }

    if (sum === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${indexes.length} places.`);
    }
}

// heartDelivery(["8@16@10@2@6@8@10", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Jump 6", "Love!"])
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"])
// heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"])