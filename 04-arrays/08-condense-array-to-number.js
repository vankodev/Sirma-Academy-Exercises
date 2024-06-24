function condenseArray(numbers) {
    while (numbers.length > 1) {
        let condensed = [];

        for (let i = 0; i < numbers.length - 1; i++) {
            condensed.push(numbers[i] + numbers[i + 1]);
        }

        numbers = condensed;
    }

    console.log(numbers[0]);
}

condenseArray([2, 10, 3]);
condenseArray([5, 0, 4, 1, 2]);
condenseArray([1]);
