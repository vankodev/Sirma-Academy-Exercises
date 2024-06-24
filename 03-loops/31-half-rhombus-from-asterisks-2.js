function printHalfRhombus(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 0; j < i; j++) {
            row += '* ';
        }

        console.log(row);
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = '';

        for (let j = 0; j < i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printHalfRhombus(1);
printHalfRhombus(2);
printHalfRhombus(3);
printHalfRhombus(4);
