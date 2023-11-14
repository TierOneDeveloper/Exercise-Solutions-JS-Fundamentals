function travelTime(input) {

    let desiredTravels = {};

    for (let each of input) {
        [countryName, townName, travelCost] = each.split(" > ");
        travelCost = Number(travelCost);

        if (countryName in desiredTravels) {

            if (townName in desiredTravels[countryName]) {

                let lastPrice = desiredTravels[countryName][townName];

                if (travelCost < lastPrice) {
                    desiredTravels[countryName][townName] = travelCost;
                }

            } else {

                desiredTravels[countryName] = Object.assign({}, desiredTravels[countryName], { [townName]: travelCost });
            }

        } else {

            desiredTravels[countryName] = { [townName]: travelCost };
        }
    }

    let result = "";
    let entries = Object.entries(desiredTravels).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [countryName, towns] of entries) {
        result += countryName + " -> "
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        for (let [townName, cost] of townEntries) {
            result += `${townName} -> ${cost} `;
        }
        result += "\n"

    }
    console.log(result);
}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])

