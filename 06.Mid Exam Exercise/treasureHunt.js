function treasureHunt(input) {
    let treasureChest = input.shift().split("|");
    let command = input.shift().split(" ");

    while (command[0] != "Yohoho!") {
        switch (command[0]) {

            case "Loot":
                for (let i = 1; i < command.length; i++) {
                    if (treasureChest.includes(command[i])) {
                        continue;
                    } else {
                        treasureChest.unshift(command[i]);
                    }
                }
                break;

            case "Drop":
                let index = Number(command[1]);
                if (index < 0 || index > (treasureChest.length - 1)) {
                    command = input.shift().split(" ");
                    continue;
                } else {
                    let removedLoot = treasureChest.splice(index, 1);
                    treasureChest.push(removedLoot);
                }
                break;

            case "Steal":
                let num = Number(command[1]);
                let stolen = treasureChest.splice(-num);
                console.log(stolen.join(", "));
                break;
        }
        command = input.shift().split(" ");
    }

    if (treasureChest.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sumLength = 0;

        for (let item of treasureChest) {
            sumLength += item.length;
        }

        let averageGain = sumLength / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
// treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])

