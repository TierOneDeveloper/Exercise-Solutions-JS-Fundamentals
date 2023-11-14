function partyTime(arr) {

    let guestList = [];

    while (arr[0] !== "PARTY") {
        guestList.push(arr.shift());
    }

    arr.shift();

    for (let each of arr) {
        let index = guestList.indexOf(each);

        if (index !== -1) {
            guestList.splice(index, 1);
        }
    }

    let vips = [];
    let regulars = [];


    for (let name of guestList) {
        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
            vips.push(name);
        } else {
            regulars.push(name);
        }
    }

    console.log(guestList.length);

    if (vips.length > 0) {
        console.log(vips.join("\n"));
    }
    if (regulars.length > 0) {
        console.log(regulars.join("\n"));
    }
}

// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'])

partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])