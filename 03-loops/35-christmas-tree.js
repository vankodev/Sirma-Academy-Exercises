function christmasTree(n) {
    let topSpaces = '';

    for (let i = 0; i <= n; i++) {
        topSpaces += ' ';
    }

    console.log(topSpaces + '|');

    for (let i = 1; i <= n; i++) {
        let spaces = '';
        let asterisks = '';

        for (let j = 0; j < n - i; j++) {
            spaces += ' ';
        }

        for (let k = 0; k < i; k++) {
            asterisks += '*';
        }

        console.log(spaces + asterisks + ' | ' + asterisks);
    }
}

christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);
