function calcDiff(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}

calcDiff([1, 2, 3, 4, 5, 6]);
calcDiff([3, 5, 7, 9]);
calcDiff([2, 4, 6, 8, 10]);
