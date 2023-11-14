function catalogue(arr) {

    let products = {};

    for (let row of arr) {
        let [productName, productPrice] = row.split(" : ");
        productPrice = Number(productPrice);
        products[productName] = productPrice;
    }

    let sortedProduct = Object.keys(products);
    sortedProduct.sort((a, b) => a.localeCompare(b));

    let firstLettersArr = [];

    for (let i = 0; i < sortedProduct.length; i++) {
        let firstLetter = sortedProduct[i][0];
        if (firstLettersArr.includes(firstLetter)) {
            continue;
        } else {
            firstLettersArr.push(firstLetter);
        }
    }

    let startLetterCode = firstLettersArr[0].charCodeAt();
    let finalLetterCode = firstLettersArr[firstLettersArr.length - 1].charCodeAt();

    for (let code = startLetterCode; code <= finalLetterCode; code++) {
        let letter = String.fromCharCode(code);
        if (firstLettersArr.includes(letter)) {
            console.log(letter);
            for (let name of sortedProduct) {
                let price = products[name];
                if (letter === name[0]) {
                    console.log(`  ${name}: ${price}`);
                }
            }
        } else {
            continue;
        }
    }
}

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'])

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'])