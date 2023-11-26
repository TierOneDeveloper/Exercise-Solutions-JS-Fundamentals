function secretChat(input) {

  let message = input.shift();
  let line = input.shift();

  while (line !== "Reveal") {
    let tokens = line.split(":|:");
    let action = tokens.shift();

    if (action === "InsertSpace") {
      let index = Number(tokens.shift());
      let firstHalf = message.slice(0, index);
      let secondHalf = message.slice(index);
      message = firstHalf + " " + secondHalf;
      console.log(message);

    } else if (action === "Reverse") {
      let substring = tokens.shift();
      if (message.includes(substring)) {
        let indexFirstChar = message.indexOf(substring);
        let lengthSubstring = substring.length;
        let firstHalf = message.slice(0, indexFirstChar);
        let secondHalf = message.slice(indexFirstChar + lengthSubstring);
        substring = substring.split("").reverse().join("");
        message = firstHalf + secondHalf + substring;
        console.log(message);
      } else {
        console.log("error");
      }

    } else if (action === "ChangeAll") {
      let [substring, replacement] = tokens;
      if (message.includes(substring)) {
        while (message.includes(substring)) {
          message = message.replace(substring, replacement);
        }
        console.log(message);
      }

    }

    line = input.shift();
  }

  console.log(`You have a new text message: ${message}`);
}

secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'])

secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'])
