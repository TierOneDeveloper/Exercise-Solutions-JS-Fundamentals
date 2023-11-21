function race(input) {

  let namePattern = /[A-Za-z]/g;
  let distancePattern = /[1-9]/g;
  let names = input.shift().split(", ");
  let runners = {};

  for (each of names) {
    runners[each] = 0;
  }

  let command = input.shift();
  while (command !== "end of race") {

    let currentName = command.match(namePattern).join("");
    let currentDistance = command.match(distancePattern).map(Number).reduce((acc, el) => acc += el);

    if (currentName in runners) {
      runners[currentName] += currentDistance;
    }
    command = input.shift();
  }

  let result = Object.entries(runners).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${result[0][0]}`);
  console.log(`2nd place: ${result[1][0]}`);
  console.log(`3rd place: ${result[2][0]}`);
}

race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'])

// race([
//   'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
// 'Mi*&^%$ch123o!#$%#nne787) ',
// '%$$B(*&&)i89ll)*&) ',
// 'R**(on%^&ald992) ',
// 'T(*^^%immy77) ',
// 'Ma10**$#g0g0g0i0e',
// 'end of race'])

