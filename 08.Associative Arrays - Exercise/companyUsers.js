function companyUsers(input) {

    let companiesEmployees = {};

    for (let each of input) {
        let [companyName, employeeID] = each.split(" -> ");
        let employeeIDArr = employeeID.split();
        if (companyName in companiesEmployees) {
            if (companiesEmployees[companyName].includes(employeeID)) {
                continue;
            } else {
                companiesEmployees[companyName].push(employeeID);
            }
        } else {
            companiesEmployees[companyName] = employeeIDArr;
        }
    }

    let entries = Object.entries(companiesEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let each of entries) {
        console.log(each[0]);
        each[1].forEach(element => console.log(`-- ${element}`));
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])