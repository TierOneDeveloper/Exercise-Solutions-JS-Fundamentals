function ModernTimesOfHashTag(str) {
    let arrayStr = str.split(" ").filter(el => el.includes("#") && el.length > 1);

    for (let each of arrayStr) {
        each = each.slice(1);
        let isValid = true;

        for (let char of each) {
            let code = char.charCodeAt();

            if (code < 65 || code > 90 && code < 97 || code > 122) {
                isValid = false;
            }
        }

        if (isValid) {
            console.log(each);
        }
    }
}

ModernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
// ModernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
