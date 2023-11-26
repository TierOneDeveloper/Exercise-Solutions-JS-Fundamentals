function mirrorWords(input) {
  let mirrorPairs = [];
  let pattern = /(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
  let text = input.shift();
  let matches = text.matchAll(pattern);
  let matchesCount = text.match(pattern);

  if (matchesCount === null || matchesCount.length === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${matchesCount.length} word pairs found!`);
  }

  for (let match of matches) {
    let currentPair = match.groups;
    let reversedFirstWord = (currentPair.firstWord).split("").reverse().join("");
    if (reversedFirstWord === currentPair.secondWord) {
      mirrorPairs.push(`${currentPair.firstWord} <=> ${currentPair.secondWord}`);
    }
  }

  if (mirrorPairs.length === 0) {
    console.log("No mirror words!");
  } else {
    let result = mirrorPairs.join(", ");
    console.log(`The mirror words are:`);
    console.log(`${result}`);
  }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])

// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])

// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])