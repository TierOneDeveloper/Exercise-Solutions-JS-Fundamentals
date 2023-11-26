function needForSpeed(input) {

  let carsNumber = Number(input.shift());
  let garage = {};

  for (let i = 0; i < carsNumber; i++) {
    let [carModel, mileage, fuel] = input.shift().split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);
    garage[carModel] = { mileage, fuel };
  }

  let command = input.shift();

  while (command !== "Stop") {
    let tokens = command.split(" : ");
    let action = tokens.shift();

    if (action === "Drive") {
      let [carModel, distance, fuel] = tokens;
      distance = Number(distance);
      fuel = Number(fuel);
      if (garage[carModel].fuel < fuel) {
        console.log("Not enough fuel to make that ride");
      } else {
        garage[carModel].mileage += distance;
        garage[carModel].fuel -= fuel;
        console.log(`${carModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
      }
      if (garage[carModel].mileage >= 100000) {
        delete garage[carModel];
        console.log(`Time to sell the ${carModel}!`);
      }

    } else if (action === "Refuel") {
      let [carModel, fuel] = tokens;
      fuel = Number(fuel);
      if (garage[carModel].fuel + fuel > 75) {
        let fuelToFill = 75 - garage[carModel].fuel;
        garage[carModel].fuel += fuelToFill;
        console.log(`${carModel} refueled with ${fuelToFill} liters`);
      } else {
        garage[carModel].fuel += fuel;
        console.log(`${carModel} refueled with ${fuel} liters`);
      }

    } else if (action === "Revert") {
      let [carModel, mileage] = tokens;
      mileage = Number(mileage);

      if (garage[carModel].mileage - mileage >= 10000) {
        garage[carModel].mileage -= mileage;
        console.log(`${carModel} mileage decreased by ${mileage} kilometers`);
      } else {
        garage[carModel].mileage = 10000;
      }
    }
    command = input.shift();
  }

  let entries = Object.entries(garage);
  entries.forEach(([carModel, info]) => console.log(`${carModel} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`));
}

// needForSpeed([
//   '3',
//   'Audi A6|38000|62',
//   'Mercedes CLS|11000|35',
//   'Volkswagen Passat CC|45678|5',
//   'Drive : Audi A6 : 543 : 47',
//   'Drive : Mercedes CLS : 94 : 11',
//   'Drive : Volkswagen Passat CC : 69 : 8',
//   'Refuel : Audi A6 : 50',
//   'Revert : Mercedes CLS : 500',
//   'Revert : Audi A6 : 30000',
//   'Stop'])

needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'])