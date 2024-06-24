function calcTime(hour, minutes) {
    let h = Number(hour);
    let m = Number(minutes) + 15;

    if (m > 60) {
        m -= 60;
        h += 1;
    }

    if (h >= 24) {
        h -= 24;
    }

    console.log(h + ':' + m.toString().padStart(2, '0'));
}

calcTime(1, 47);
calcTime(0, 2);
calcTime(23, 59);
calcTime(11, 07);
