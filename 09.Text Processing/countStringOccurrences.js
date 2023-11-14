function countStringOccurrences(str, word) {
    let counter = 0;
    let strArr = str.split(" ");
    for (let each of strArr) {
        if (each === word) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence', 'is')
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni')
