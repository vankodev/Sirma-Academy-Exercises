function specialNumbers(n) {
    for (let i = 1111; i <= 9999; i++) {
        const numStr = i.toString();
        let isSpecial = true;

        for (let j = 0; j < numStr.length; j++) {
            if (n % Number(numStr[j]) !== 0) {
                isSpecial = false;
            }
        }

        if (isSpecial) {
            console.log(i);
        }
    }
}

specialNumbers(3);
