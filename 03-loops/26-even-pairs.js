function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function evenPair(firstStart, secondStart, firstDiff, secondDiff) {
    const firstEnd = firstStart + firstDiff;
    const secondEnd = secondStart + secondDiff;

    for (let i = firstStart; i <= firstEnd; i++) {
        for (let j = secondStart; j <= secondEnd; j++) {
            if (isPrime(i) && isPrime(j)) {
                console.log(`${i}${j}`);
            }
        }
    }
}

evenPair(10, 20, 5, 5);
evenPair(10, 30, 9, 6);
