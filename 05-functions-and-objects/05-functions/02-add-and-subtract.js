function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function addAndSubtract(a, b, c) {
    let sumResult = sum(a, b);
    let subtractResult = subtract(sumResult, c);
    console.log(subtractResult);
}

addAndSubtract(23, 6, 10); // 19
addAndSubtract(1, 17, 30); // -12
addAndSubtract(42, 58, 100); // 0
