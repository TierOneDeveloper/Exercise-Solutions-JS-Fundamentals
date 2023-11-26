function pirates(input) {

  let data = input.shift();
  let targets = {};

  while (data !== "Sail") {
    let [city, population, gold] = data.split("||");
    population = Number(population);
    gold = Number(gold);

    if (city in targets) {
      targets[city].population += population;
      targets[city].gold += gold;
    } else {
      targets[city] = { population, gold };
    }
    data = input.shift();
  }

  data = input.shift();

  while (data !== "End") {

    let tokens = data.split("=>");
    let command = tokens.shift();

    if (command === "Plunder") {
      let [city, citizens, gold] = tokens;
      citizens = Number(citizens);
      gold = Number(gold);

      targets[city].population -= citizens;
      targets[city].gold -= gold;

      console.log(`${city} plundered! ${gold} gold stolen, ${citizens} citizens killed.`);

      if (targets[city].population <= 0 || targets[city].gold <= 0) {
        delete targets[city];
        console.log(`${city} has been wiped off the map!`);
      }

    } else if (command === "Prosper") {
      let [city, gold] = tokens;
      gold = Number(gold);

      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
        data = input.shift();
        continue;
      } else {
        targets[city].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
      }
    }
    data = input.shift();
  }

  let entries = Object.entries(targets);

  if (entries.length === 0) {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  } else {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
    entries.forEach(([town, stats]) => console.log(`${town} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`));
  }
}

// pirates([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End"])


pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"])
