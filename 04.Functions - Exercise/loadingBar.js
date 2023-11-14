function loadingBar(number) {
    let symbol = "%";
    let symbol2 = "."
    let counter = number / 10;
    let diff = 10 - counter;
    if (number === 100) {
        console.log(`${number}% Complete!`);
    } else if (number > 0 && number < 100) {
        console.log(`${number}% [${symbol.repeat(counter)}${symbol2.repeat(diff)}]`);
        console.log("Still loading...");
    }
}

loadingBar(30)
loadingBar(50)
// loadingBar(100)

/*
30	30% [%%%.......]
    Still loading...

50	50% [%%%%%.....]
    Still loading...
*/
