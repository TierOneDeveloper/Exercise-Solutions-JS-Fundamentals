function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let finalPrice = 0;
    finalPrice = (Math.trunc(lostFights / 2) * helmetPrice) + (Math.trunc(lostFights / 3) * swordPrice) + (Math.trunc(lostFights / 6) * shieldPrice) + (Math.trunc(lostFights / 12) * armorPrice);

    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5)