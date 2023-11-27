function plantDiscovery(input) {

  let plantsNumber = Number(input.shift());
  let plants = {};

  for (let i = 0; i < plantsNumber; i++) {
    let [plant, rarity] = input.shift().split("<->");
    rarity = Number(rarity);
    plants[plant] = { rarity, ratings: [] };
  }

  let line = input.shift();

  while (line !== "Exhibition") {
    let data = line.split(": ");
    let action = data.shift();

    if (action === "Rate") {
      let [plant, rating] = data.shift().split(" - ");
      rating = Number(rating);

      if (!(plant in plants)) {
        console.log("error");
      } else {
        (plants[plant].ratings).push(rating);
      }

    } else if (action === "Update") {
      let [plant, newRarity] = data.shift().split(" - ");
      newRarity = Number(newRarity);
      if (!(plant in plants)) {
        console.log("error");
      } else {
        plants[plant].rarity = newRarity;
      }

    } else if (action === "Reset") {
      let plant = data.shift();
      if (!(plant in plants)) {
        console.log("error");
      } else {
        (plants[plant].ratings).length = 0;
      }

    }
    line = input.shift();
  }

  let entries = Object.entries(plants);

  for (let entry of entries) {
    let [plantName, info] = entry;

    if ((info.ratings).length === 0) {
      info.ratings = (0).toFixed(2);
    } else {
      let sum = (info.ratings).reduce((acc, el) => acc += el);
      info.ratings = (sum / (info.ratings).length).toFixed(2);
    }
  }

  console.log("Plants for the exhibition:");
  entries.forEach(([plantName, info]) => console.log(`- ${plantName}; Rarity: ${info.rarity}; Rating: ${info.ratings}`));

}

// plantDiscovery([
//   "3",
//   "Arnoldii<->4",
//   "Woodii<->7",
//   "Welwitschia<->2",
//   "Rate: Woodii - 10",
//   "Rate: Welwitschia - 7",
//   "Rate: Arnoldii - 3",
//   "Rate: Woodii - 5",
//   "Update: Woodii - 5",
//   "Reset: Arnoldii",
//   "Exhibition"])


plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition"])
