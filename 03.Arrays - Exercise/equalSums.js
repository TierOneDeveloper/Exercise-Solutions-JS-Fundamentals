function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let finalLeft = 0;
    let finalRight = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            for (let n = i + 1; n < arr.length; n++) {
                rightSum += arr[n];
            }
        } else if (i === arr.length - 1) {
            for (let m = 0; m < arr.length - 1; m++) {
                leftSum += arr[m];
            }
        } else {
            for (let k = 0; k < i; k++) {
                leftSum += arr[k];
            }

            for (let l = i + 1; l < arr.length; l++) {
                rightSum += arr[l];
            }
        }
        finalLeft = leftSum;
        finalRight = rightSum;

        if (leftSum === rightSum) {
            console.log(i);
            break;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (finalLeft != finalRight) {
        console.log("no");
    } else if (finalLeft === finalRight === 0) {
        console.log(0);
    }
}
// equalSums([1])
// equalSums([1, 2, 3, 3])
// equalSums([1, 2])
// equalSums([1, 2, 3])
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])