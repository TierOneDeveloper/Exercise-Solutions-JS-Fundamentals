function aMinerTask(input) {

    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qunatity = Number(input[i + 1]);
        if (resource in resources) {
            resources[resource] += qunatity;
        } else {
            resources[resource] = qunatity;
        }
    }

    let entries = Object.entries(resources);

    for (let [resource, qunatity] of entries) {
        console.log(`${resource} -> ${qunatity}`);
    }
}


// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'])

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']) 
