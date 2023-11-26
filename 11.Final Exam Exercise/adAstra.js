function adAstra(input) {

  let text = input.shift();
  let pattern = /(\||#)(?<itemName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let totalCalories = 0;
  let items = [];

  let matches = text.matchAll(pattern);

  for (let match of matches) {
    let currentItemData = match.groups;
    currentItemData.calories = Number(currentItemData.calories);
    totalCalories += currentItemData.calories;
    items.push(currentItemData);
  }

  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  items.forEach(item => console.log(`Item: ${item.itemName}, Best before: ${item.date}, Nutrition: ${item.calories}`));

}

// adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])

// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])