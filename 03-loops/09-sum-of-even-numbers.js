function sumEvenNumbers(n) {
    let evenNumber = 0;
    let sum = 0;

    for (i = 0; i < n; i++) {
        evenNumber += 2;
        sum += evenNumber;
    }

    console.log(sum);
}

sumEvenNumbers(3);
sumEvenNumbers(5);
sumEvenNumbers(1);
sumEvenNumbers(0);
sumEvenNumbers(10);
