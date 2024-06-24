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

function uniqueCodes(firstLimit, secondLimit, thirdLimit) {
    for (let i = 2; i <= firstLimit; i += 2) {
        for (let j = 2; j <= Math.min(secondLimit, 7); j++) {
            for (let k = 2; k <= thirdLimit; k += 2) {
                if (isPrime(j)) {
                    console.log(i, j, k);
                }
            }
        }
    }
}

uniqueCodes(3, 5, 5);
console.log('--------');
uniqueCodes(6, 2, 6);
