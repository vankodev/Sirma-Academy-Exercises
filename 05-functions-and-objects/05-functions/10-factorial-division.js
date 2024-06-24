function calcFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcFactorial(n - 1);
}

function factorialDivision(num1, num2) {
    const factorial1 = calcFactorial(num1);
    const factorial2 = calcFactorial(num2);

    const result = (factorial1 / factorial2).toFixed(2);
    console.log(result);
}

factorialDivision(5, 2);
factorialDivision(6, 2);
