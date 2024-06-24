function getSumExpression(divisors) {
    let sumExpression = '';

    for (let i = 0; i < divisors.length; i++) {
        sumExpression += divisors[i];
        if (i < divisors.length - 1) {
            sumExpression += ' + ';
        }
    }

    return sumExpression;
}

function isPerfectNumber(number) {
    let divisors = [];

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    let aliquotSum = 0;

    for (let divisor of divisors) {
        aliquotSum += divisor;
    }

    isPerfect = aliquotSum === number;

    return isPerfect
        ? `Perfect Number!\n${getSumExpression(divisors)}`
        : `It's not so perfect.`;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(1236498));
