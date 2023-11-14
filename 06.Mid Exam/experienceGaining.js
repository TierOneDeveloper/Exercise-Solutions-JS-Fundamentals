function numbers(input) {
    let wantedExperience = input.shift();
    let expectedBattles = input.shift();
    let collectedExperience = 0;
    let battleCount = 1

    for (battleCount = 1; battleCount <= expectedBattles; battleCount++) {
        curr = input[battleCount - 1];

        if (battleCount % 3 === 0) {
            collectedExperience += (curr + (curr * 0.15));
        }
        else if (battleCount % 5 === 0) {
            collectedExperience += (curr - (curr * 0.10));
        }
        else if (battleCount % 15 === 0) {
            collectedExperience += (curr + (curr * 0.05));
        } else {
            collectedExperience += curr;
        }

        if (collectedExperience >= wantedExperience) {
            return console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
        }
    }

    if (collectedExperience >= wantedExperience) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(wantedExperience - collectedExperience).toFixed(2)} more needed.`);
    }
}

// experienceGaining([500, 5, 50, 100, 200, 100, 30])
// experienceGaining([500, 5, 50, 100, 200, 100, 20])
numbers([400, 5, 50, 100, 200, 100, 20])

