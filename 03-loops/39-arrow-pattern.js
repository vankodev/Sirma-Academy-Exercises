function drawArrow(n) {
    // Upper part
    for (let i = 1; i < n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= i; k++) {
            row += '* ';
        }

        console.log(row);
    }
    // Lower Part
    for (let i = 1; i <= n - 1; i++) {
        let row = '';

        for (let j = 1; j <= n / 2; j++) {
            row += ' ';
        }

        for (let k = 1; k <= n - 1; k++) {
            row += '*';
        }

        console.log(row);
    }
}

drawArrow(7);
drawArrow(4);
drawArrow(6);
