function getSumOfOddAndEven(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        lastDigit = number % 10;

        if (lastDigit % 2 === 0) {
            evenSum += lastDigit;
        } else {
            oddSum += lastDigit;
        }

        number = Math.trunc(number / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(getSumOfOddAndEven(1000435));
console.log(getSumOfOddAndEven(3495892137259234));
