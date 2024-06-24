function printSmallestTwo(numbers) {
    // console.log(
    //     numbers
    //         .sort((a, b) => a - b)
    //         .splice(0, 2)
    //         .join(' ')
    // );

    let sorted = [];

    if (numbers[0] <= numbers[1]) {
        sorted = [numbers[0], numbers[1]];
    } else {
        sorted = [numbers[1], numbers[0]];
    }

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] < sorted[0]) {
            sorted[1] = sorted[0];
            sorted[0] = numbers[i];
        } else if (numbers[i] < sorted[1]) {
            sorted[1] = numbers[i];
        }
    }

    console.log(sorted.join(' '));
}

printSmallestTwo([30, 15, 50, 5]);
printSmallestTwo([3, 0, 10, 4, 7, 3]);
