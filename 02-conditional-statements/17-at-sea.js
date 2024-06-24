function getCost(days, room, assessment) {
    let totalPrice = 0;

    switch (room) {
        case 'single room':
            totalPrice = (days - 1) * 25.00;
            break;
        case 'apartment':
            totalPrice = (days - 1) * 50.00;

            if (days < 10) {
                totalPrice = totalPrice - totalPrice * 30 / 100;
            } else if (days <= 15) {
                totalPrice = totalPrice - totalPrice * 35 / 100;
            } else {
                totalPrice = totalPrice - totalPrice * 50 / 100;
            }
            break;
        case 'president apartment':
            totalPrice = (days - 1) * 100.00;

            if (days < 10) {
                totalPrice = totalPrice - totalPrice * 10 / 100;
            } else if (days <= 15) {
                totalPrice = totalPrice - totalPrice * 15 / 100;
            } else {
                totalPrice = totalPrice - totalPrice * 20 / 100;
            }
            break;
    }

    if (assessment == 'positive') {
        totalPrice = totalPrice + totalPrice * 25 / 100;
    } else {
        totalPrice = totalPrice - totalPrice * 10 / 100;
    }

    console.log(totalPrice.toFixed(2));
}

getCost(11, 'apartment', 'positive');
getCost(30, 'president apartment', 'negative');
getCost(12, 'single room', 'positive');
getCost(2, 'apartment', 'positive');
