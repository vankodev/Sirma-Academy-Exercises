function printOdd(numbers) {
    let processed = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            processed.unshift(numbers[i] * 2);
        }
    }

    console.log(processed.join(' '));
}
printOdd([10, 15, 20, 25]);
printOdd([3, 0, 10, 4, 7, 3]);
