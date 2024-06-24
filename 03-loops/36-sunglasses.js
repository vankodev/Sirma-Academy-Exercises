function printSunglasses(n) {
    const width = 5 * n;
    const bridge = Math.floor(n / 2);

    // Top and Bottom frames
    const frameRow = '*'.repeat(n * 2) + ' '.repeat(n) + '*'.repeat(n * 2);
    console.log(frameRow);

    // Lens rows
    for (let i = 0; i < n - 2; i++) {
        const lens = '*' + '/'.repeat(n * 2 - 2) + '*';
        const spaceOrBridge = i === bridge - 1 ? '|'.repeat(n) : ' '.repeat(n);
        console.log(lens + spaceOrBridge + lens);
    }

    console.log(frameRow);
}

printSunglasses(3);
printSunglasses(4);
printSunglasses(5);
