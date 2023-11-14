function rightPlace(first, char, second) {
    let result = '';

    for (i = 0; i < first.length; i++) {
        if (first[i] == "_") {
            result += char;
        } else {
            result += first[i];
        }
    }

    if (result == second) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')
