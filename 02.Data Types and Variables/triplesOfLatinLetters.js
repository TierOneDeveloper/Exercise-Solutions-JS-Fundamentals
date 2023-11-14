function triplesOfLatinLetters(num) {

    let numAsNumer = Number(num);

    for (i = 97; i < (97 + numAsNumer); i++) {
        for (j = 97; j < (97 + numAsNumer); j++) {
            for (k = 97; k < (97 + numAsNumer); k++) {
                let letterA = String.fromCharCode(i);
                let letterB = String.fromCharCode(j);
                let letterC = String.fromCharCode(k);
                console.log(`${letterA}${letterB}${letterC}`);
            }
        }
    }
}

triplesOfLatinLetters("26")