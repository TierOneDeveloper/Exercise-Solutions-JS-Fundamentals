function theImitationGame(input) {

  let encryptedMessage = input.shift();
  let command = input.shift();

  while (command !== "Decode") {

    let tokens = command.split("|");
    let action = tokens.shift();

    if (action === "ChangeAll") {
      let [substring, replacement] = tokens;

      if (encryptedMessage.includes(substring)) {
        while (encryptedMessage.includes(substring)) {
          encryptedMessage = encryptedMessage.replace(substring, replacement);
        }
      }

    } else if (action === "Insert") {
      let [index, value] = tokens;
      index = Number(index);

      let firstHalf = encryptedMessage.slice(0, index);
      let secondHalf = encryptedMessage.slice(index);
      encryptedMessage = firstHalf + value + secondHalf;

    } else if (action === "Move") {

      let [number] = tokens;
      number = Number(number);

      let lettersToMove = encryptedMessage.split("").slice(0, number).join("");
      encryptedMessage = encryptedMessage.slice(number);
      encryptedMessage = encryptedMessage + lettersToMove;
    }
    command = input.shift();
  }

  console.log(`The decrypted message is: ${encryptedMessage}`);
}

// theImitationGame([
//   'zzHe',
//   'ChangeAll|z|l',
//   'Insert|2|o',
//   'Move|3',
//   'Decode',])

theImitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',])
