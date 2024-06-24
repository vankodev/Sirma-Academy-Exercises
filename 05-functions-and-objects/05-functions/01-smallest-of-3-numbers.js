function findSmaller(first, second) {
    return first < second ? first : second;
}

function findSmallest(first, second, third) {
    let smaller = findSmaller(first, second);
    let result = findSmaller(smaller, third);
    console.log(result);
}

findSmallest(2, 5, 3);
findSmallest(600, 342, 123);
findSmallest(25, 21, 4);
