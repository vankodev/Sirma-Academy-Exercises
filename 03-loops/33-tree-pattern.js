function printTree(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = '';
        let asterisks = '';

        for (let j = 0; j < n - i; j++) {
            spaces += ' ';
        }

        for (let k = 0; k < i * 2 - 1; k++) {
            asterisks += '*';
        }

        console.log(spaces + asterisks);
    }

    let trunkSpaces = '';
    for (let i = 0; i < n - 1; i++) {
        trunkSpaces += ' ';
    }
    console.log(trunkSpaces + '*');
}

printTree(6);
printTree(4);
printTree(3);
