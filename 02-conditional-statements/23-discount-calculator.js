function calcDiscount(age, membership) {
    if (age < 18) {
        console.log('10% discount');
    } else if (age > 64) {
        console.log('30% discount')
    } else if (membership) {
        console.log('20% discount')
    } else {
        console.log('10% discount')
    }
}

calcDiscount(20, 'Yes');
calcDiscount(15, 'No');
calcDiscount(70, 'No');
