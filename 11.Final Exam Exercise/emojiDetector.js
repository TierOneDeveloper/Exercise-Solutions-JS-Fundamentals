function emojiDetector(input) {

  let text = input.shift();

  let digitPattern = /[0-9]/g;
  let emojisPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;

  let coolThreshold = BigInt(text.match(digitPattern).map(Number).reduce((acc, el) => acc *= el));
  console.log(`Cool threshold: ${coolThreshold}`);

  let emojis = text.match(emojisPattern);
  let coolEmojis = [];

  for (let emoji of emojis) {
    let emojiCoolness = 0;
    let surrounder = emoji.slice(0, 2);

    emoji = emoji.slice(2, -2);

    for (let char of emoji) {
      let code = char.charCodeAt();
      emojiCoolness += code;
    }
    if (emojiCoolness >= coolThreshold) {
      coolEmojis.push(surrounder + emoji + surrounder);
    }
  }
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
  coolEmojis.forEach(el => console.log(el));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
// emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])