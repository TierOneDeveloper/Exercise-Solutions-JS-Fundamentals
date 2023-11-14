function bitcoinMining(input) {
    let index = 0;
    let currentDayShift = input[index];
    index++;
    let daysCounter = 0;
    let bitcoinCounter = 0;
    let firstBitcoin = 0;
    let availableMoney = 0;
    let bitcoinExchangeRate = 11949.16;
    let goldExchangeRate = 67.51;

    for (let days = 1; days <= input.length; days++) {
        daysCounter++;
        if (daysCounter % 3 === 0) {
            currentDayShift -= currentDayShift * 0.30;
        }
        availableMoney += currentDayShift * goldExchangeRate;
        if (availableMoney >= bitcoinExchangeRate) {
            bitcoinCounter++;
            if (bitcoinCounter === 1) {
                firstBitcoin = daysCounter;
            }
            availableMoney -= bitcoinExchangeRate;
        }
        currentDayShift = input[index];
        index++;
    }

    let secondCounter = Math.floor(availableMoney / bitcoinExchangeRate);
    let secondMoney = Math.floor(secondCounter) * bitcoinExchangeRate;
    availableMoney -= secondMoney;
    bitcoinCounter += secondCounter;

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${availableMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124])
