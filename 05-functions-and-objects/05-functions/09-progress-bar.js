function progressBar(number) {
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

    for (let i = 0; i < number / 10; i++) {
        bar[i] = '%';
    }

    console.log(`${number}% [${bar.join('')}]`);
    console.log(number === 100 ? 'Complete!' : 'Loading...');
}

progressBar(30);
progressBar(50);
progressBar(100);
