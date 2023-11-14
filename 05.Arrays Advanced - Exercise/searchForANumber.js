function searchForANumber(numbers, searchInfo) {
    let numbersToTake = searchInfo.shift();
    let numbersToDelete = searchInfo.shift();
    let numberForSearch = searchInfo.pop();

    let afterTake = numbers.splice(0, numbersToTake);
    afterTake.splice(0., numbersToDelete);
    let count = 0;

    for (each of afterTake) {
        if (each === numberForSearch) {
            count++;
        }
    }
    console.log(`Number ${numberForSearch} occurs ${count} times.`);
}

// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
// searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])
searchForANumber([3, 4, 5, 2, 4, 5, 6, 64, 32, 23, 1, 4, 5, 6, 4, 2, 4, 6, 7, 8, 8, 5, 43, 2, 432,], [20, 5, 4])