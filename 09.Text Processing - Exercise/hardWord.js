function hardWord(arr) {
    let [text, words] = arr;

    let emptySlots = text.split(" ").filter(el => el.includes("_"));

    for (let each of emptySlots) {
        if (!each.endsWith("_")) {
            each = each.substring(0, each.length - 1);
        }

        let wordToFill = words.find(word => word.length === each.length);
        text = text.replace(each, wordToFill);
    }

    console.log(text);
}

hardWord([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

