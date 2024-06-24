function multiplicationTable() {
    let n = 0;
    let m = 0;

    for (i = 0; i < 10; i++) {
        n++;

        for (j = 0; j < 10; j++) {
            m++;
            console.log(`${n} * ${m} = ${n * m}`);
        }

        m = 0;
    }
}

multiplicationTable();
