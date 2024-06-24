function drawLeftArrow(n) {
    // upper part
    for (let i = 1; i <= n; i++) {
        let row = '';
        // add spaces
        for (let k = 0; k < n - i; k++) {
            row += ' ';
        }
        // add asterisks
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }

    // lower part
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        // add spaces
        for (let k = 0; k < n - i; k++) {
            row += ' ';
        }
        // add asterisks
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

drawLeftArrow(5);
drawLeftArrow(4);
drawLeftArrow(10);
