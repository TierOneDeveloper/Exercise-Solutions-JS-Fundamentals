function replaceRepeatingChars(str) {
    let result = "";
    let prevChar = "";

    for (let char of str) {

        if (prevChar !== char) {
            result += char;
            prevChar = char;
        }

    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')