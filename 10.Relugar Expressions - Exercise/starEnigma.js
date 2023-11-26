function starEnigma(input) {

  let letterCountPattern = /[star]/gi;
  let pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*:(?<population>[0-9]+)[^@!:>-]*!(?<type>A|D)![^@!:>-]*->(?<soldiers>[0-9]+)/;

  let attackedPlanets = [];
  let destroyedPlanets = [];

  let messagesNumber = Number(input.shift());
  let message = input.shift();


  for (let i = 0; i < messagesNumber; i++) {
    let match = message.match(letterCountPattern);
    let decryptedMessage = "";

    if (match) {
      let count = match.length;
      let messageArr = message.split("");

      for (let each of messageArr) {
        let codeOfEach = each.charCodeAt();
        let newCode = codeOfEach - count;
        decryptedMessage += String.fromCharCode(newCode);
      }
    } else {
      decryptedMessage = message;
    }

    let decryptedMatch = decryptedMessage.match(pattern);

    if (decryptedMatch) {
      let { name, population, type, soldiers } = decryptedMatch.groups;

      if (type === "A") {
        attackedPlanets.push(name);
      } else if (type === "D") {
        destroyedPlanets.push(name);
      }
    }
    message = input.shift();
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach(element => console.log(`-> ${element}`));
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach(element => console.log(`-> ${element}`));
}

starEnigma([
  '2',
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR'])

console.log("--------------------------------");

starEnigma([
  '3',
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  'GQhrr|A977777(H(TTTT',
  'EHfsytsnhf?8555&I&2C9555SR'])