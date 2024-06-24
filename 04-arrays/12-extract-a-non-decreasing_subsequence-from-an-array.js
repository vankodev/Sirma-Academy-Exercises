function extractSubsequence(numbers) {
    let subsequence = [numbers[0]];

    for (let i = 0; i < numbers.length; i++) {
        let lastNumber = subsequence[subsequence.length - 1];

        if (lastNumber < numbers[i]) {
            subsequence.push(numbers[i]);
        }
    }

    console.log(subsequence.join(' '));
}

extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubsequence([1, 2, 3, 4]);
extractSubsequence([20, 3, 2, 15, 6, 1]);
