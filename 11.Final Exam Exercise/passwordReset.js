function passwordReset(input) {

  let predefinedStr = input.shift();
  let command = input.shift();

  while (command !== "Done") {
    let data = command.split(" ");

    switch (data[0]) {

      case "TakeOdd":
        let currentPass = "";
        for (let i = 0; i < predefinedStr.length; i++) {
          if (!(i % 2 === 0)) {
            currentPass += predefinedStr[i];
          }
        }
        predefinedStr = currentPass;
        console.log(predefinedStr);
        break;

      case "Cut":
        let index = Number(data[1]);
        let length = Number(data[2]);
        let str = predefinedStr.substring(index, index + length);
        predefinedStr = predefinedStr.replace(str, "");
        console.log(predefinedStr);
        break;

      case "Substitute":
        let separator = data[1];
        let replaceSeparator = data[2];

        if (predefinedStr.includes(separator)) {
          predefinedStr = predefinedStr.split(separator).join(replaceSeparator);
          console.log(predefinedStr);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }
    command = input.shift();
  }
  console.log(`Your password is: ${predefinedStr}`);
}

// passwordReset
//   (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"])

passwordReset
  (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])