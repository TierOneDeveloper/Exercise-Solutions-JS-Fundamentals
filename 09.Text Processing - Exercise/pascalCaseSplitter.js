function pascalCaseSplitter(str) {
    let charsArray = str.split("");
    let template = "-"

    for (let i = 0; i < charsArray.length; i++) {
        if (charsArray[i].charCodeAt() >= 65 && charsArray[i].charCodeAt() <= 90) {
            charsArray[i] = template.concat(charsArray[i]);
        }
    }

    let splitted = charsArray.join("").split("-").slice(1).join(", ");
    console.log(splitted);
}

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')