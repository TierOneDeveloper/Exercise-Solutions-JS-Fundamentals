function spiceMustFlow(startingYield) {
    let storage = 0;
    let daysCounter = 0;

    while (startingYield >= 100) {
        daysCounter++;
        storage += startingYield - 26;
        startingYield -= 10;
    }
    storage -= 26;
    if (daysCounter == 0) {
        storage = 0;
    }
    console.log(daysCounter);
    console.log(storage);
}

spiceMustFlow(99)