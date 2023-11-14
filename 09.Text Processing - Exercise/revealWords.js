function revealWords(words, str) {

    let wordsArr = words.split(", ");
    let templateSymbol = "*";

    for (let each of wordsArr) {
        let countSymbol = each.length;
        let placeToRepalce = templateSymbol.repeat(countSymbol);
        str = str.replace(placeToRepalce, each);
    }

    console.log(str);
}

revealWords('great', 'softuni is ***** place for learning new programming languages')
// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
