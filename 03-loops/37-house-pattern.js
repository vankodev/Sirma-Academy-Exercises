function drawHouse(n) {
    if (n % 2 === 0) {
        console.log('Input must be positive odd integer');
        return;
    }

    // draw roof
    for (let i = 1; i <= n; i += 2) {
        let spaces = '';
        let tilesRow = '';

        for (let j = 0; j < (n - i) / 2; j++) {
            spaces += ' ';
        }

        for (let k = 0; k < i; k++) {
            tilesRow += '*';
        }

        console.log(spaces + tilesRow);
    }
    // draw walls
    for (let i = 0; i < 2; i++) {
        let wall = '';

        for (let j = 1; j <= n; j++) {
            if (j === 1 || j === n) {
                wall += '*';
            } else {
                wall += ' ';
            }
        }

        console.log(wall);
    }
}

drawHouse(7);
drawHouse(4);
drawHouse(3);
