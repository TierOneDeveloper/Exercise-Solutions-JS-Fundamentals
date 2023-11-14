function legendaryFarming(str) {

    let legendaryItems = { shards: 0, fragments: 0, motes: 0 };
    let junk = {};

    let inputArr = str.split(" ");

    for (let i = 0; i < inputArr.length; i += 2) {
        let qunatity = Number(inputArr[i]);
        let material = (inputArr[i + 1]).toLowerCase();

        if (material in legendaryItems) {
            legendaryItems[material] += qunatity;

            if (legendaryItems.shards >= 250) {
                legendaryItems.shards -= 250;
                console.log(`Shadowmourne obtained!`);
                break;

            } else if (legendaryItems.fragments >= 250) {
                legendaryItems.fragments -= 250;
                console.log(`Valanyr obtained!`);
                break;

            } else if (legendaryItems.motes >= 250) {
                legendaryItems.motes -= 250;
                console.log(`Dragonwrath obtained!`);
                break;
            }

        } else {
            if (material in junk) {
                junk[material] += qunatity;
            } else {
                junk[material] = qunatity;
            }

        }
    }

    let entriesLegItems = Object.entries(legendaryItems).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [material, quantity] of entriesLegItems) {
        console.log(`${material}: ${quantity}`);
    }

    let entriesJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [material, quantity] of entriesJunk) {
        console.log(`${material}: ${quantity}`);
    }

}


legendaryFarming('3 Motes 5 stones 5 Shards 234 motes 6 leathers 5 leathers 255 fragments 7 Shards')
// console.log('------------------------');
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')