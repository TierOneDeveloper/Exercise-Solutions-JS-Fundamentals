function DungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let currentHealth = 0;

    arr = arr[0].split("|");
    for (let i = 0; i < arr.length; i++) {
        let room = arr[i];
        let command = room.split(" ");
        if (command[0] === "potion") {
            currentHealth = health + Number(command[1]);
            if (currentHealth < 100) {
                health += Number(command[1]);
                console.log(`You healed for ${command[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else if (currentHealth >= 100) {
                console.log(`You healed for ${(100 - health)} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command[0] === "chest") {
            coins += Number(command[1]);
            console.log(`You found ${command[1]} coins.`);
        } else {
            if (health > 0) {
                health -= Number(command[1]);
                if (health <= 0) {
                    console.log(`You died! Killed by ${command[0]}.`);
                    console.log(`Best room: ${i + 1}`);
                    break;
                }
                console.log(`You slayed ${command[0]}.`);
            } else if (health <= 0) {
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${i + 1}`);
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

DungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
DungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);