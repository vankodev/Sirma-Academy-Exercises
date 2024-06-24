function calcFactorial(n) {
    let factorial = 1;

    for (i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

calcFactorial(5);
calcFactorial(3);
calcFactorial(0);
calcFactorial(1);
calcFactorial(10);
