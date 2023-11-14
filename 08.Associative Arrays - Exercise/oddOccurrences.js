function oddOccurrences(str) {

    let oddOccur = {};
    let words = str.split(" ");

    for (let word of words) {
        word = word.toLowerCase();
        
        if (word in oddOccur) {
            oddOccur[word]++;
        } else {
            oddOccur[word] = 1;
        }
    }

    let entries = Object.entries(oddOccur);
    let filteredOccur = entries.filter(el => el[1] % 2 !== 0);

    let result = "";
    for (let i = 0; i < filteredOccur.length; i++) {
        result += filteredOccur[i][0] + " ";
    }
    console.log(result);
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')
