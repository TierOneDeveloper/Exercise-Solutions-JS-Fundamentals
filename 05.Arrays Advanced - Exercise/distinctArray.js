function distinctArray(array) {

    let nums = array.join(" ").split(" ");
    let formatedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!formatedArray.includes(nums[i])) {
            formatedArray.push(nums[i]);
        }
    }
    console.log(formatedArray.join(" "));
}

// distinctArray([1, 2, 3, 4])
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5])