function hollowRectangle(n, m) {
    let rows = n;

    while (rows > 0) {
        let columns = m;
        let row = '';

        if (rows == n || rows == 1) {
            while (columns > 0) {
                row += '*';
                columns--;
            }
        } else {
            while (columns > 0) {
                if (columns == m || columns == 1) {
                    row += '*';
                } else {
                    row += ' ';
                }

                columns--;
            }
        }

        console.log(row);

        rows--;
    }
}

hollowRectangle(4, 6);
hollowRectangle(2, 2);
hollowRectangle(3, 4);
