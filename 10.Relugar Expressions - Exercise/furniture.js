function furniture(input) {

  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>(\d+\.\d+|\d+\d+))!(?<quantity>\d+)/;
  let boughtFurniture = [];
  let totalMoney = 0;

  let command = input.shift();

  while (command !== "Purchase") {
    let match = command.match(pattern);
    if (match) {
      let { name, price, quantity } = match.groups;
      let currentPrice = Number(price) * Number(quantity);
      boughtFurniture.push(name);
      totalMoney += currentPrice;
    }
    command = input.shift();
  }

  console.log("Bought furniture:");
  boughtFurniture.forEach(el => console.log(el));
  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

// furniture([
//   '>>Sofa<<312.23!3',
//   '>>TV<<300!5',
//   '>Invalid<<!5',
//   'Purchase'])

// furniture([
//   '>>Laptop<<312.2323!3',
//   '>>TV<<300.21314!5',
//   '>Invalid<<!5',
//   '>>TV<<300.21314!20',
//   '>>Invalid<!5',
//   '>>TV<<30.21314!5',
//   '>>Invalid<<!!5',
//   'Purchase'])

// furniture([
//   '>Invalid<<!4',
//   '>Invalid<<!2',
//   '>Invalid<<!5',
//   'Purchase'])