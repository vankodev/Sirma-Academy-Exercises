function lastK(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - k; j < i; j++) {
            if (j >= 0) {
                sum += sequence[j];
            }
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

lastK(6, 3);
lastK(8, 2);
