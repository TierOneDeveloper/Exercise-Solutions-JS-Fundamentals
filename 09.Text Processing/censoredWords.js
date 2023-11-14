function censoredWords(str, word) {

    let result = str.replace(word, "*".repeat(word.length));

    while (result.includes(word)) {
        result = result.replace(word, "*".repeat(word.length));
    }
    console.log(result);
}

// censoredWords('A small sentence with some small words', 'small');
censoredWords('Find the hidden word', 'hidden');
