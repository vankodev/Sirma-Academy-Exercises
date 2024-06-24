function findNumbers(n, m) {
    let hasEquals = false;

    for (let i = n; i <= m; i++) {
        let numStr = i.toString();
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < numStr.length; j++) {
            let currentDigit = Number(numStr[j]);

            if ((j + 1) % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }

        if (oddSum === evenSum) {
            console.log(i);
            hasEquals = true;
        }
    }

    if (!hasEquals) {
        console.log('None');
    }
}

findNumbers(100000, 100050);
findNumbers(299900, 300000);
findNumbers(100115, 100120);
