function softUniBarIncome(input) {

  let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>(\d+\.?\d*)|\d)\$/;
  let totalIncome = 0;


  let command = input.shift();
  while (command !== "end of shift") {

    let match = command.match(pattern);

    if (match) {
      let { name, product, quantity, price } = match.groups;
      let currentIncome = Number(price) * Number(quantity);
      totalIncome += currentIncome;
      console.log(`${name}: ${product} - ${currentIncome.toFixed(2)}`);
    }

    command = input.shift();
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'])

// softUniBarIncome([
//   '%InvalidName%<Croissant>|2|10.3$',
//   '%Peter%<Gum>1.3$',
//   '%Maria%<Cola>|1|2.4',
//   '%Valid%<Valid>valid|10|valid20$',
//   'end of shift'])

