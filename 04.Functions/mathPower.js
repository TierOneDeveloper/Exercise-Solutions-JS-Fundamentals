function mathPower(number, power) {
    let product = 1;
    for (let i = 1; i <= power; i++) {
        product *= number
    }
    return product;
}

console.log(mathPower(2, 8));
console.log(mathPower(3, 4));
