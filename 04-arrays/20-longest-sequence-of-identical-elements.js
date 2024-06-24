function findLongestSequence(input) {
    const numbers = input.split(' ');
    let maxSeq = [];
    let currentSeq = [numbers[0]];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] === numbers[i]) {
            currentSeq.push(numbers[i]);
        } else {
            if (currentSeq.length >= maxSeq.length) {
                maxSeq = currentSeq;
            }

            currentSeq = [numbers[i]];
        }
    }

    if (currentSeq.length >= maxSeq.length) {
        maxSeq = currentSeq;
    }

    // If 2 or more sequences have the same length, print the one that is on the "right".
    console.log(maxSeq.join(' '));
}

findLongestSequence('2 2 2 3 4 4 2 2 2 1');
findLongestSequence('1 1 1 2 3 1 3 3 1 1 ');
findLongestSequence('1 1 2 3 4 5 6 2 2');
findLongestSequence('4 4 4 4');
findLongestSequence('0 1 1 2 2 3 3 4 4 5 5');
