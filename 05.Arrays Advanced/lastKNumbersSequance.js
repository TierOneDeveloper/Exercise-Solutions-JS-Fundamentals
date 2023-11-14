function lastKNumbersSequance(n, k) {
    let arr = [1];
    arr[1] = arr[0];

    for (let i = 2; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k);
        let end = i - 1;

        for (let j = start; j <= end; j++) {
            sum += Number(arr[j]);
        }
        arr[i] = sum;
    }
    console.log(arr.join(" "));
}

lastKNumbersSequance(6, 3);
// lastKNumbersSequance(10,1);
// lastKNumbersSequance(8, 2);