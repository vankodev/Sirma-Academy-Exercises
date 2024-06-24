function drawSquareFrame(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n; j++) {
            const isCorner = (i === 1 || i === n) && (j === 1 || j === n);
            const isHorizontalEdge = i === 1 || i === n;
            const isVerticalEdge = j === 1 || j === n;

            if (isCorner) {
                row += '+ ';
            } else if (isHorizontalEdge) {
                row += '- ';
            } else if (isVerticalEdge) {
                row += '| ';
            } else {
                row += '- ';
            }
        }

        console.log(row);
    }
}

drawSquareFrame(3);
drawSquareFrame(4);
drawSquareFrame(5);
drawSquareFrame(6);
