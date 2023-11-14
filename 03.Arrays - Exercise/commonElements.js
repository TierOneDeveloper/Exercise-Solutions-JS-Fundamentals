function commonElements(first, second) {
    for (let element of first) {
        if (second.includes(element)) {
            console.log(element);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])