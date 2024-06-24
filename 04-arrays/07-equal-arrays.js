function equalArrays(arr1, arr2) {
    let sum = 0;
    let diff = [];

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);

        if (num1 === num2) {
            sum += num1;
        } else {
            diff.push(i);
        }
    }

    if (!diff.length) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(
            `Arrays are not identical. Found difference at ${diff[0]} index`
        );
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);
