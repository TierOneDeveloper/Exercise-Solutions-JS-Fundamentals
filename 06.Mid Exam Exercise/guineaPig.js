function guineaPig(input) {

    let foodInGrams = input[0] * 1000;
    let hayInGrams = input[1] * 1000;
    let coverInGrams = input[2] * 1000;
    let weightInGrams = input[3] * 1000;

    for (let i = 1; i < 31; i++) {
        foodInGrams -= 300;
        if (foodInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }

        if (i % 2 === 0) {
            hayInGrams -= foodInGrams * 0.05;
        }
        if (hayInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }

        if (i % 3 === 0) {
            coverInGrams -= weightInGrams / 3;
        }
        if (coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    if (foodInGrams > 0 && hayInGrams > 0 && coverInGrams > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
    }
}

guineaPig(["10", "5", "5.2", "1"])
// guineaPig(["1", "1.5", "3", "1.5"])
// guineaPig(["9", "5", "5.2", "1"])


/*
You receive food – 10000, hay – 5000, cover – 5200, weight – 1000 (in grams). 
On the first day, Merry gives Puppy 300gr food – 9700gr food left.
On the second day, the food left is 9400gr, so the needed hay is 9400 * 5%  = 470, and the hay left is 4530. 
On the third day, the cover left is 4866.67, and the food left is 9100, and so on.
On the last day, Merry has: food – 1.00, hay – 1.10, and cover – 1.87.
*/
