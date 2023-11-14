function lettersChangeNumbers(str) {

    let numLetterStr = str.split(" ").filter(el => el.length !== 0);
    let finalSum = 0;
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let each of numLetterStr) {

        let firstLetter = each.split("").shift();
        let secondLetter = each.split("").pop();
        let number = Number(each.split("").slice(1, each.length - 1).join(""));
        let currentResult = 0;
        let positionFirst = alphabet.indexOf(firstLetter.toLowerCase());
        let positionSecond = alphabet.indexOf(secondLetter.toLowerCase());

        if (/[A-Z]/.test(firstLetter)) {
            currentResult += number / positionFirst;
        } else if (/[a-z]/.test(firstLetter)) {
            currentResult += number * positionFirst;
        }

        if (/[A-Z]/.test(secondLetter)) {
            currentResult -= positionSecond;
        } else if (/[a-z]/.test(secondLetter)) {
            currentResult += positionSecond;
        }

        finalSum += currentResult;
    }

    console.log(finalSum.toFixed(2));
}

lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f   H456z')
lettersChangeNumbers('a1A')
// lettersChangeNumbers('P34562Z q2576f   H456z h34342t      W5a        g4324324T  Z2321D')