function arenaTier(arr) {
    let arena = {};
    let index = 0;

    let inputLine = arr[index];
    index++;

    while (inputLine !== "Ave Cesar") {
        let command = inputLine.split(" -> ");

        if (command.length == 3) {
            let [name, technique, skill] = command;
            skill = Number(skill);

            if (name in arena) {
                if (technique in arena[name]) {
                    let lastSkill = arena[name][technique];

                    if (lastSkill < skill) {
                        arena[name][technique] = skill;
                    }

                } else {
                    arena[name] = Object.assign({}, arena[name], { [technique]: skill });
                }
            } else {
                arena[name] = { [technique]: skill };
            }
        } else if (command.length == 1) {
            let [firstGladiator, secondGladiator] = command[0].split(" vs ");

            if (firstGladiator in arena && secondGladiator in arena) {

                let isMatched = false;
                let firstGladiatorKeys = Object.keys(arena[firstGladiator]);
                let secondGladiatorKeys = Object.keys(arena[secondGladiator]);

                for (let each of firstGladiatorKeys) {
                    if (secondGladiatorKeys.includes(each)) {
                        isMatched = true;
                        break;
                    }
                }

                if (isMatched === true) {
                    let firstTotal = 0;
                    let secondTotal = 0;
                    let firstGladiatorValues = Object.values(arena[firstGladiator]);
                    for (let skillTech of firstGladiatorValues) {
                        firstTotal += skillTech;
                    }
                    let secondGladiatorValues = Object.values(arena[secondGladiator]);
                    for (let skillTech of secondGladiatorValues) {
                        secondTotal += skillTech;
                    }

                    if (firstTotal > secondTotal) {
                        delete arena[secondGladiator];
                    } else if (secondTotal > firstTotal) {
                        delete arena[firstGladiator];
                    }
                } else {
                    inputLine = arr[index];
                    index++;
                    continue;
                }
            } else {
                inputLine = arr[index];
                index++;
                continue;
            }

        }
        inputLine = arr[index];
        index++;
    }

    let arenaEntries = Object.entries(arena).sort(compareSkill);

    for (let [name, tech] of arenaEntries) {

        let total = 0;

        for (let skill of Object.values(tech)) {
            total += skill;
        }

        console.log(`${name}: ${total} skill`);

        let sortedTech = Object.entries(tech).sort(compareTech);

        for (let [name, skill] of sortedTech) {
            console.log(`- ${name} <!> ${skill}`);
        }
    }

    function compareSkill(a, b) {
        let firstTotal = 0;
        let secondTotal = 0;

        let firstGladiatorValues = Object.values(a[1]);
        for (let skillTech of firstGladiatorValues) {
            firstTotal += skillTech;
        }
        let secondGladiatorValues = Object.values(b[1]);
        for (let skillTech of secondGladiatorValues) {
            secondTotal += skillTech;
        }

        return (secondTotal - firstTotal) || a[0].localeCompare(b[0]);
    }

    function compareTech(a, b) {
        return (b[1] - a[1]) || a[0].localeCompare(b[0]);
    }
}


// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'])

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'])
