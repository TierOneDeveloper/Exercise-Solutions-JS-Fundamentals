function inventory(arr) {

    let heroes = [];

    for (let row of arr) {
        let items = row.split(" / ");
        let heroName = items.shift();
        let heroLevel = Number(items.shift());
        let heroeObj = { name: heroName, level: heroLevel, items: items };
        heroes.push(heroeObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (each of heroes) {
        console.log(`Hero: ${each.name}`);
        console.log(`level => ${each.level}`);
        console.log(`items => ${each.items.join(", ")}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
// ])