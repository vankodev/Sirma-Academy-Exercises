function clock() {
    let hours = 0;
    let minutes = 0;

    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            console.log(`${hours}:${minutes}`)
            minutes++;
        }

        hours++;
        minutes = 0;
    }
}

clock()