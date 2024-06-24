function getPrice(vegetable, day, quantity) {
    isWeekday = day == 'Monday' 
        || day == 'Tuesday' 
        || day == 'Wednesday' 
        || day == 'Thursday' 
        || day == 'Friday';

    isWeekend = day == 'Saturday' || day == 'Sunday';

    let isValid = true;
    let singlePrice = 0;

    if (isWeekday) {
        switch (vegetable) {
            case 'tomato':
                singlePrice = 2.50;
                break;
            case 'onion':
                singlePrice = 1.20;
                break;
            case 'lettuce':
                singlePrice = 0.85;
                break;
            case 'cucumber':
                singlePrice = 1.45;
                break;
            case 'pepper':
                singlePrice = 5.50;
                break;
            default:
                isValid = false;
                break;
        }
    } else if (isWeekend) {
        switch (vegetable) {
            case 'tomato':
                singlePrice = 2.80;
                break;
            case 'onion':
                singlePrice = 1.30;
                break;
            case 'lettuce':
                singlePrice = 0.85;
                break;
            case 'cucumber':
                singlePrice = 1.75;
                break;
            case 'pepper':
                singlePrice = 3.50;
                break;
            default:
                isValid = false;
                break;
            }
    } else {
        isValid = false;
    }

    const totalPrice = (singlePrice * quantity).toFixed(2);

    if (isValid) {
        console.log(totalPrice);
    } else {
        console.log('error');
    }
}

getPrice('tomato', 'Tuesday', 2);
getPrice('onion', 'Sunday', 3);
getPrice('pepper', 'Monday', 10);
getPrice('banana', 'Friday', 5);
