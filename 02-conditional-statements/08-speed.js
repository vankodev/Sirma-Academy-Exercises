function speedInfo(speed) {
    if (speed > 160) {
        console.log('turbo-fast');
    } else if (speed > 120) {
        console.log('super-fast');
    } else if (speed > 60) {
        console.log('fast');
    } else if (speed > 10) {
        console.log('average');
    } else {
        console.log('slow');
    }
}

speedInfo(10);
speedInfo(59);
speedInfo(120);
speedInfo(121);
speedInfo(183);
speedInfo(59.99);
speedInfo(60.001);
