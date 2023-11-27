function worldTour(input) {

  let destinations = input.shift();
  let command = input.shift();

  while (command !== "Travel") {
    let tokens = command.split(":");
    let action = tokens.shift();

    if (action === "Add Stop") {
      let [index, string] = tokens;
      index = Number(index);

      if (!(index < 0 || index > (destinations.length - 1))) {
        let firstHalf = destinations.slice(0, index);
        let secondHalf = destinations.slice(index);
        destinations = firstHalf + string + secondHalf;
        console.log(destinations);
        // console.log(destinations);
        // command = input.shift();
        // continue;
      } else {
        console.log(destinations);
        command = input.shift();
        continue;
        // let firstHalf = destinations.slice(0, index);
        // let secondHalf = destinations.slice(index);
        // destinations = firstHalf + string + secondHalf;
        // console.log(destinations);
      }

    } else if (action === "Remove Stop") {
      let [startIndex, endIndex] = tokens;
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);

      if (!((startIndex < 0 || startIndex > destinations.length - 1) || (endIndex < 0 || endIndex > destinations.length - 1))) {
        let firstHalf = destinations.slice(0, startIndex);
        let secondHalf = destinations.slice(endIndex + 1);
        destinations = firstHalf + secondHalf;
        console.log(destinations);
        // console.log(destinations);
        // command = input.shift();
        // continue;
      } else {
        console.log(destinations);
        command = input.shift();
        continue;
        // let firstHalf = destinations.slice(0, startIndex);
        // let secondHalf = destinations.slice(endIndex + 1);
        // destinations = firstHalf + secondHalf;
        // console.log(destinations);
      }

    } else if (action === "Switch") {
      let [oldString, newString] = tokens;

      destinations = destinations.split(oldString).join(newString);

      // if (destinations.includes(oldString)) {
      //   while (destinations.includes(oldString)) {
      //     destinations = destinations.replace(oldString, newString);
      //   }
      // }
      console.log(destinations);
    }

    command = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"])

// worldTour([
//   "Albania:Bulgaria:Cyprus:Deuchland",
//   "Add Stop:3:Nigeria",
//   "Remove Stop:4:8",
//   "Switch:Albania: Azərbaycan",
//   "Travel"])


