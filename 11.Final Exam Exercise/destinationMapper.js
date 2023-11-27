function destinationMapper(input) {

  let pattern = /(=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;
  let matches = input.matchAll(pattern);
  let travelPoints = 0;
  let destinations = [];

  for (let match of matches) {

    let currentDestination = match.groups.destination;
    travelPoints += currentDestination.length;
    destinations.push(currentDestination);
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}

// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

destinationMapper("ThisIs some InvalidInput")
