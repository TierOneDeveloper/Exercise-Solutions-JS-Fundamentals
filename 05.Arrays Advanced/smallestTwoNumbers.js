function smallestTwoNumbers(arr) {
    let result = []; 
    let sortedArr = arr.sort((a,b) => a-b);

    for (let i = 0; i< 2; i++){
        let smallestNum = sortedArr.shift();
        result.push(smallestNum);
    }
    console.log(result.join(" "));

}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])