function passwordGenerator(arr) {
    let [firstStr, secondStr, replacementChars] = arr;
    let counter = 0;

    let concatStr = firstStr + secondStr;

    for (let eachChar of concatStr) {
        if (/[ieaou]/.test(eachChar)) {

            if (counter === replacementChars.length) {
                counter = 0;
            }
            concatStr = concatStr.replace(eachChar, replacementChars[counter].toUpperCase());
            counter++;

        }
    }

    let result = concatStr.split("").reverse().join("");
    console.log(`Your generated password is ${result}`);
}

// passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])
