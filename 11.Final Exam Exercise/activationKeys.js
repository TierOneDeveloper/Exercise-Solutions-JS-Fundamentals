function activationKeys(input) {

  let rawActivationKey = input.shift();
  let activationKey = "";

  let line = input.shift();

  while (line !== 'Generate') {
    let tokens = line.split(">>>");

    switch (tokens[0]) {

      case "Contains":
        let substring = tokens[1];
        if (rawActivationKey.includes(substring)) {
          console.log(`${rawActivationKey} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
        break;

      case "Flip":
        let type = tokens[1];
        let startIndex = Number(tokens[2]);
        let endIndex = Number(tokens[3]);
        let firstHalf = rawActivationKey.slice(0, startIndex);
        let secondHalf = rawActivationKey.slice(endIndex);

        if (type === "Upper") {
          let upperCaseString = rawActivationKey.slice(startIndex, endIndex).toUpperCase();
          rawActivationKey = firstHalf + upperCaseString + secondHalf;
        } else if (type = "Lower") {
          let lowerCaseString = rawActivationKey.slice(startIndex, endIndex).toLowerCase();
          rawActivationKey = firstHalf + lowerCaseString + secondHalf;
        }
        console.log(rawActivationKey);
        break;

      case "Slice":
        let firstSliceIndex = Number(tokens[1]);
        let secondSliceIndex = Number(tokens[2]);
        let firstSlicedHalf = rawActivationKey.slice(0, firstSliceIndex);
        let secondSlicedHalf = rawActivationKey.slice(secondSliceIndex);
        rawActivationKey = firstSlicedHalf + secondSlicedHalf;

        console.log(rawActivationKey);
        break;
    }
    line = input.shift();
  }
  console.log(`Your activation key is: ${rawActivationKey}`);
}

// activationKeys([
//   "abcdefghijklmnopqrstuvwxyz",
//   "Slice>>>2>>>6",
//   "Flip>>>Upper>>>3>>>14",
//   "Flip>>>Lower>>>5>>>7",
//   "Contains>>>def",
//   "Contains>>>deF",
//   "Generate"])

activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"])

