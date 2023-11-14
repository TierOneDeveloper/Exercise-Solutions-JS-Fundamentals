function maxNumber(arr) {
    let topIntegers = [];
    let maxRight = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        let currentNum = arr[i];
        if (currentNum > maxRight) {
            topIntegers.push(currentNum);
            maxRight = currentNum;
        }
    }
    topIntegers.reverse();
    console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])

function maxNumber1(arr) {

    let topIntegers = [];
    for (i = 0; i < arr.length; i++) {
        let number = arr[i];
        let isTop = true;

        for (j = i + 1; j < arr.length; j++) {
            let currentNumber = arr[j];
            if (currentNumber >= number) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topIntegers.push(number);
        }
    }
    console.log(topIntegers.join(" "));
}

maxNumber1([1, 4, 3, 2])
maxNumber1([14, 24, 3, 19, 15, 17])