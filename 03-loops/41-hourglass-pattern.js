function printHourglass(n) {
    let endLine = '';

    for (let i = 0; i < n + 2; i++) {
        endLine += '#';
    }

    console.log(endLine);

    let middleSpaces = n - 2;
    let frontSpaces = 1;

    // top part
    while (middleSpaces >= -1) {
        // start new line
        let line = '';

        // add whitespaces
        for (let i = 0; i < frontSpaces; i++) {
            line += ' ';
        }

        // add #
        line += '#';

        // add middlespace
        for (let i = 0; i < middleSpaces; i++) {
            line += ' ';
        }

        // add #
        if (middleSpaces <= 0) {
            if (n % 2 === 0) {
                line += '#';
            }
        } else {
            line += '#';
        }

        console.log(line);
        middleSpaces -= 2;
        frontSpaces += 1;
    }

    // bottom part
    if (n % 2 == 0) {
        middleSpaces = 2;
    } else {
        middleSpaces = 1;
    }

    frontSpaces -= 2;

    while (middleSpaces <= n - 2) {
        // start new line
        let line = '';

        // add whitespaces
        for (let i = 0; i < frontSpaces; i++) {
            line += ' ';
        }

        // add #
        line += '#';

        // add middlespace
        for (let i = 0; i < middleSpaces; i++) {
            line += ' ';
        }

        // add #
        if (middleSpaces <= n) {
            line += '#';
        }

        console.log(line);
        middleSpaces += 2;
        frontSpaces -= 1;
    }

    console.log(endLine);
}

printHourglass(5);
console.log('-----------------');
printHourglass(4);
console.log('-----------------');
printHourglass(8);
console.log('-----------------');
printHourglass(2);
console.log('-----------------');
printHourglass(12);
