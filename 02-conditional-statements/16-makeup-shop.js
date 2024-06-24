function calcProfit(renovation, powders, lipsticks, spirals, shadows, correctors) {
    let totalCount = powders + lipsticks + spirals + shadows + correctors;
    let totalPrice =
        powders * 2.6 +
        lipsticks * 3 +
        spirals * 4.1 +
        shadows * 8.2 +
        correctors * 2;

    if (totalCount >= 50) {
        //25% discount of totalPrice;
        totalPrice = totalPrice * 0.75;
    }

    // rent -10% of totalPrice;
    totalPrice = totalPrice * 0.9;

    let enoughMoney = totalPrice > renovation;


    if (enoughMoney) {
        let moneyLeft = (totalPrice - renovation).toFixed(2);
        console.log(`Yes! ${moneyLeft} BGN left.`);
    } else {
        let moneyLack = (renovation - totalPrice).toFixed(2);
        console.log(`Not enough money! ${moneyLack} BGN needed.`);
    }
}

calcProfit(40.8, 20, 25, 30, 50, 10);
calcProfit(320, 8, 2, 5, 5, 1);
