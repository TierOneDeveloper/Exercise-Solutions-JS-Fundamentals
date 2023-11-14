function addressBook(arr) {

    let register = {};

    for (let row of arr) {
        let [name, adress] = row.split(":");
        register[name] = adress;

        if (name in register) {
            register[name] = adress;
        }
    }

    let entries = Object.entries(register);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, adress] of entries) {
        console.log(`${name} -> ${adress}`);
    }
}

// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'])

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])

