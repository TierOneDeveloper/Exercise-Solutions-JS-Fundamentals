function mergeArrays(first, second) {
    let third = [];

    for (let i = 0; i < first.length; i++) {
        let firstArrElement = first[i];
        let secondArrElement = second[i];
        let current = 0;
        if (i % 2 == 0) {
            current = Number(firstArrElement) + Number(secondArrElement);
        } else {
            current = firstArrElement + secondArrElement;
        }
        third.push(current);
    }
    console.log(third.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
