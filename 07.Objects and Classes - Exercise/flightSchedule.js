function flightSchedule(arr) {

    let startFlights = arr.shift();
    let changedFlights = arr.shift();
    let flightStatus = arr.shift();
    let flights = {};

    for (let each of startFlights) {
        let splitted = each.split(" ");
        let flightNumber = splitted.shift();
        let flightDestination = splitted.join(" ");
        flights[flightNumber] = { Destination: flightDestination, Status: " " };
    }


    for (let each of changedFlights) {
        let [changedFlightNumber, changedStatus] = each.split(" ");
        if (changedFlightNumber in flights) {
            flights[changedFlightNumber]["Status"] = changedStatus;
        }
    }

    let keys = Object.keys(flights)

    for (let i = 0; i < keys.length; i++) {
        if (flightStatus[0] === "Ready to fly") {
            if (flights[keys[i]]["Status"] !== "Cancelled") {
                flights[keys[i]]["Status"] = "Ready to fly";
                console.log(`{ Destination: '${flights[keys[i]]["Destination"]}', Status: '${flights[keys[i]]["Status"]}' }`);
            }
        } else if (flightStatus[0] === "Cancelled") {
            if (flights[keys[i]]["Status"] === "Cancelled") {
                console.log(`{ Destination: '${flights[keys[i]]["Destination"]}', Status: '${flights[keys[i]]["Status"]}' }`);
            }
        }
    }
}


flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    [
        'Cancelled'
    ]
])

console.log('-----------------------------------------------------');

flightSchedule([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania']
    ,
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    [
        'Ready to fly'
    ]
])