function summOddNumbers(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let oddNum = 2 * i + 1
        console.log(oddNum);
        sum += oddNum;
    }

    console.log(`Sum: ${sum}`);
}

summOddNumbers(5);
summOddNumbers(3);
