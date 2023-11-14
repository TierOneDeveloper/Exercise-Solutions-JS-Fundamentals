function addAndSubtract(arr) {
    let arrSum = 0;
    let newArrSum = 0;
    let newArr = [];

    for (i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        arrSum += num;
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newArrSum += num;
        newArr.push(num);
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])

