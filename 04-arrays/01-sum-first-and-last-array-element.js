function sumFirstAndLast(arr) {
    const firstElement = Number(arr[0]);
    const lastElement = Number(arr[arr.length - 1]);

    console.log(firstElement + lastElement);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['10', '17', '22', '33']);
sumFirstAndLast(['11', '58', '69']);
