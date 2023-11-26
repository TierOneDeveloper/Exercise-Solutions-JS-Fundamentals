function heroesOfCodeAndLogic(input) {

  let heroesCount = Number(input.shift());
  let party = {};

  for (let i = 0; i < heroesCount; i++) {
    let [heroName, hp, mp] = input.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    party[heroName] = { hp, mp };
  }

  let data = input.shift();

  while (data !== "End") {
    let tokens = data.split(" - ");
    let command = tokens.shift();

    if (command === "CastSpell") {
      let [heroName, mpNeeded, spellName] = tokens;
      mpNeeded = Number(mpNeeded);

      if (party[heroName].mp >= mpNeeded) {
        party[heroName].mp -= mpNeeded;
        console.log(`${heroName} has successfully cast ${spellName} and now has ${party[heroName].mp} MP!`);
      } else {
        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
      }

    } else if (command === "TakeDamage") {
      let [heroName, damage, attacker] = tokens;
      damage = Number(damage);
      party[heroName].hp -= damage;

      if (party[heroName].hp > 0) {
        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${party[heroName].hp} HP left!`);
      } else {
        delete party[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
      }

    } else if (command === "Recharge") {
      let [heroName, amount] = tokens;
      amount = Number(amount);

      if (party[heroName].mp + amount > 200) {
        let rechargedMP = 200 - party[heroName].mp;
        party[heroName].mp = party[heroName].mp + rechargedMP;
        console.log(`${heroName} recharged for ${rechargedMP} MP!`);
      } else {
        party[heroName].mp += amount;
        console.log(`${heroName} recharged for ${amount} MP!`);
      }

    } else if (command === "Heal") {
      let [heroName, amount] = tokens;
      amount = Number(amount);

      if (party[heroName].hp + amount > 100) {
        let rechargedHP = 100 - party[heroName].hp;
        party[heroName].hp = party[heroName].hp + rechargedHP;
        console.log(`${heroName} healed for ${rechargedHP} HP!`);
      } else {
        party[heroName].hp += amount;
        console.log(`${heroName} healed for ${amount} HP!`);
      }
    }

    data = input.shift();
  }

  let entries = Object.entries(party);
  entries.forEach(([name, stats]) => console.log(`${name}\n  HP: ${stats.hp}\n  MP: ${stats.mp}`));
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End"])

// heroesOfCodeAndLogic([
//   "4",
//   "Adela 90 150",
//   "SirMullich 70 40",
//   "Ivor 1 111",
//   "Tyris 94 61",
//   "Heal - SirMullich - 50",
//   "Recharge - Adela - 100",
//   "CastSpell - Tyris - 1000 - Fireball",
//   "TakeDamage - Tyris - 99 - Fireball",
//   "TakeDamage - Ivor - 3 - Mosquito",
//   "End"])