function pyramidOfNumbers(n) {
    let lineCounter = 0;
    let step = 1;

    while (step <= n) {
        lineCounter++;
        step += lineCounter;
    }

    let currentNumber = 1;
    let level = 1;

    while (currentNumber <= n) {
        let row = '';

        for (let j = 0; j < lineCounter - 1; j++) {
            row += ' ';
        }

        for (let i = 1; i <= level && currentNumber <= n; i++) {
            row += currentNumber + ' ';
            currentNumber++;
        }

        console.log(row);
        lineCounter--;
        level++;
    }
}

pyramidOfNumbers(7);
pyramidOfNumbers(10);
pyramidOfNumbers(12);
