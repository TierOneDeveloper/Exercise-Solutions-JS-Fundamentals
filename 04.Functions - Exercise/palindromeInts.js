function palindromeInts(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let currentElementToString = currentElement.toString();
        let split = currentElementToString.split("").reverse();
        let splitToString = split.join("");
        let splitToNumber = Number(splitToString);
        
        if (currentElement === splitToNumber) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeInts([123, 323, 421, 121]);
palindromeInts([32, 2, 232, 1010]);