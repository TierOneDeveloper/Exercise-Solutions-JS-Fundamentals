function charactersInRange(first, second) {
    let firstCode = first.charCodeAt();
    let secondCode = second.charCodeAt();
    let result = "";

    if (secondCode < firstCode) {
        for (let i = secondCode + 1; i < firstCode; i++) {
            let currentCode = i;
            let currentChar = String.fromCharCode(currentCode);
            result += " " + currentChar;
        }
    } else {
        for (let i = firstCode + 1; i < secondCode; i++) {
            let currentCode = i;
            let currentChar = String.fromCharCode(currentCode);
            result += " " + currentChar;
        }
    }
    console.log(result);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
