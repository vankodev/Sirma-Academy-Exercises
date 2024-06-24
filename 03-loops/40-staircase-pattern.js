function drawStaircase(n) {
    for (let i = 0; i < n; i++) {
        let steps = '#';
        let spaces = '';

        for (let j = 0; j < i; j++) {
            steps += '#';
        }

        for (let k = 1; k < i; k++) {
            for (let l = 1; l <= k; l++) {
                spaces += ' ';
            }
        }

        console.log(spaces + steps);
    }
}

drawStaircase(5);
drawStaircase(4);
drawStaircase(2);
