function convertToJSON(firstName,lastName,hairColour) {

    let person = {};
    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColour;

    let personToJSONStr = JSON.stringify(person);
    console.log(personToJSONStr);
}

convertToJSON('George', 'Jones', 'Brown')
// convertToJSON('Peter', 'Smith', 'Blond')
