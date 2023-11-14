function meetings(arr) {

    let meetingsObj = {};

    for (let each of arr) {
        let [day, name] = each.split(" ");
        if (day in meetingsObj) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        meetingsObj[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    let entries = Object.entries(meetingsObj);

    for (let [day, person] of entries) {
        console.log(`${day} -> ${person}`);
    }

}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
// meetings([
//     'Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George'])
