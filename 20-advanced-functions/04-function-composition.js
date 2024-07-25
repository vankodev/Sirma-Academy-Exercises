function double(a) {
    return a * 2;
}

function square(a) {
    return a * a;
}

const compose = (...fns) => (arg) =>
        fns.reduce((acc, fn) => fn(acc), arg);

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
