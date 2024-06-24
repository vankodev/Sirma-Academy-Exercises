function printRhombus(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = '';
        let asterisks = '';

        for (let j = 0; j < n - i; j++) {
            spaces += ' ';
        }

        for (let k = 0; k < i; k++) {
            asterisks += '* ';
        }

        console.log(spaces + asterisks);
    }

    for (let i = n - 1; i >= 1; i--) {
        let spaces = '';
        let asterisks = '';

        for (let j = 0; j < i; j++) {
            asterisks += '* ';
        }

        for (let k = 0; k < n - i; k++) {
            spaces += ' ';
        }

        console.log(spaces + asterisks);
    }
}

printRhombus(1);
printRhombus(2);
printRhombus(3);
printRhombus(4);
