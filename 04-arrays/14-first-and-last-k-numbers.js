function firstAndLast(k, numbers) {
    let firstK = [];
    let lastK = [];

    for (let i = 0; i < k; i++) {
        firstK.push(numbers[i]);
    }

    for (let i = numbers.length - k; i <= numbers.length; i++) {
        lastK.push(numbers[i]);
    }

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstAndLast(2, [7, 8, 9]);
console.log('-------');
firstAndLast(3, [6, 7, 8, 9]);
