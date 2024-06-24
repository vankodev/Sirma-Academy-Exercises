function negativePositiveNumbers(arr) {
    let newArr = [];

    for (let element of arr) {
        if (element >= 0) {
            newArr.push(element);
        } else {
            newArr.unshift(element);
        }
    }

    for (let element of newArr) {
        console.log(element);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log('-----');
negativePositiveNumbers([3, -2, 0, -1]);
