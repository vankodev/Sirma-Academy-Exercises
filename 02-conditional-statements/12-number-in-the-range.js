function isInRange(num) {
    if (num !== 0 && num <= 100 && num >= -100) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

isInRange(-25);
isInRange(0);
isInRange(25);
