function drawPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        // Add spaces
        for (let j = 0; j < n - i; j++) {
            row += ' ';
        }

        // Add increasing digits
        for (let j = i; j < i * 2; j++) {
            row += j % 10;
        }

        // Add decreasing digits
        for (let j = i * 2 - 2; j >= i; j--) {
            row += j % 10;
        }

        console.log(row);
    }
}

drawPyramid(5);
drawPyramid(4);
drawPyramid(3);
