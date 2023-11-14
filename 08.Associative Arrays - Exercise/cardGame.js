function cardGame(input) {

    let players = {};
    let powers = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let types = { S: 4, H: 3, D: 2, C: 1 };

    for (let each of input) {
        let [name, cardsStr] = each.split(": ");
        let cards = cardsStr.split(", ");

        if (name in players) {
            players[name].push(...cards);
        } else {
            players[name] = cards;
        }
    }

    let entries = Object.entries(players);

    for (let [name, deck] of entries) {

        let uniqueDeck = new Set(deck);
        let sum = 0;

        for (let card of uniqueDeck) {

            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];
            let product = powers[power] * types[type];
            sum += product;
        }
        console.log(`${name}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])

// cardGame([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'])