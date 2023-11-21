function netherRealms(input) {

  let demonPattern = / *,{1} */g;
  // let scorePattern = /[+-]?[\d+\.]*[\d]+/g;
  let scorePattern = /[+-]?[\d+]\.[\d]|[+-]?\d+/g;
  let namePattern = /[^0-9\-\.\*\/\+\ \,]/g;

  let demons = input.split(demonPattern).sort((a, b) => a.localeCompare(b));

  for (let demon of demons) {

    let name = demon.match(namePattern);
    let damageScores = demon.match(scorePattern);

    if (damageScores === null) {
      damageScores = 0;
    } else {
      damageScores = demon.match(scorePattern).map(Number).reduce((acc, el) => acc += el);
    }

    let health = 0;

    for (let each of name) {
      let currentCode = each.charCodeAt();
      health += currentCode;
    }

    let multiplyCount = demon.split("").filter(el => el === "*");
    let divideCount = demon.split("").filter(el => el === "/");

    if (multiplyCount.length > divideCount.length) {
      damageScores = damageScores * (multiplyCount.length - divideCount.length) * 2;
    } else if (divideCount.length > multiplyCount.length) {
      damageScores = damageScores / (((divideCount.length - multiplyCount.length) * 2));
    } else if (multiplyCount.length === divideCount.length) {
      damageScores = damageScores;
    }

    console.log(`${demon} - ${health} health, ${damageScores.toFixed(2)} damage`);
  }
}

netherRealms('Mdhsj23+5ds-4**x    ,      Ivan20g+5-20***')
// netherRealms('M3ph-0.5s-0.5t0.0**');
// netherRealms('M3ph1st0**, Azazel')
// netherRealms('Gos/ho')