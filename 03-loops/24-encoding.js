function encoding(number) {
    while (number > 0) {
        let last = number % 10;

        if (last == 0) {
            console.log('ZERO');
        } else {
            const symbol = String.fromCharCode(last + 33);

            let line = '';

            for (let i = 0; i < last; i++) {
                line += symbol;
            }
            console.log(line);
        }

        number = Math.floor(number / 10);
    }
}

encoding(2049);
// encoding(9347439);
