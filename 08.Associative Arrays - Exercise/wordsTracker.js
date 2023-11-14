function wordsTracker(arr) {

    let occurances = {};
    let searchWords = arr.shift().split(" ");

    for (let each of searchWords) {
        occurances[each] = 0;
    }

    for (let each of arr) {
        if (each in occurances) {
            occurances[each]++;
        }
    }

    let entries = Object.entries(occurances).sort((a,b) => b[1] - a[1]);

    for (let [word, times] of entries) {
        console.log(`${word} - ${times}`);
    }
}

// wordsTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])

    wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])