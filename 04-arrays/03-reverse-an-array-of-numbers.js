function reverseNumbers(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.unshift(arr[i]);
    }

    console.log(newArr.join(' '));
}

reverseNumbers(3, [10, 20, 30, 40, 50]);
reverseNumbers(4, [-1, 20, 99, 5]);
reverseNumbers(2, [66, 43, 75, 89, 47]);
