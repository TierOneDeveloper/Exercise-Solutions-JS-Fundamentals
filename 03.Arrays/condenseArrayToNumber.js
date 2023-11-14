function condenseArrayToNumber(nums) {
    let condensed = [];

    for (let i = 0; i < nums.length - 1; i++) {
        condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
    }

    while (condensed.length !== 1) {
        let current = [];
        for (i = 0; i < condensed.length - 1; i++) {
            current[i] = Number(condensed[i]) + Number(condensed[i + 1]);
        }
        if (nums.length === 1) {
            break;
        }
        condensed = current;
    }

    if (nums.length === 1) {
        console.log(nums[0]);
    } else {
        console.log(condensed[0]);
    }
}

condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([1])