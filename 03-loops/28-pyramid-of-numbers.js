function pyramidOfNumbers(n) {
    let currentNumber = 1;
    let level = 1;

    while(currentNumber <= n) {
        let row = '';

        for (let i = 1; i <= level && currentNumber <= n; i++) {
            row += currentNumber + ' ';
            currentNumber++;
        }

        console.log(row);
        level++;
    }

}

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(15);

