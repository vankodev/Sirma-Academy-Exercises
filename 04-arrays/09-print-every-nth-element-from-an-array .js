function printNthElements(arr, n) {
    let collections = [];

    for (let i = 0; i < arr.length; i += n) {
        collections.push(arr[i]);
    }

    console.log(collections.join(' '));
}

printNthElements(['5', '15', '31', '14', '20'], 2);
printNthElements(['dsa', 'asd', 'demo', 'test'], 2);
printNthElements(['1', '2', '3', '4', '5'], 6);
