function collatzConjecture(n) {
    let result = n.toString();

    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }

        result += ' ' + n.toString();
    }

    console.log(result);
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);
