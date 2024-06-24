function calcCharges(weight, sum) {
    let overweightFee = 0;
    let oversizeFee = 0;
    let handlingFee = 0;
    let oversize = sum - 158;

    if (weight > 50) {
        overweightFee = 100;
    }

    if (oversize > 50) {
        oversizeFee = 200;
    } else if (oversize > 20) {
        oversizeFee = 100;
    } else if (oversize > 0) {
        oversizeFee = 50;
    }

    if (overweightFee && oversizeFee) {
        handlingFee = 50;
    }

    const totalFee = oversizeFee + overweightFee + handlingFee;
    let reason = '';
    if (overweightFee) {
        if (oversizeFee == 50) {
            reason = 'Overweight + Slightly oversize';
        } else if (oversizeFee > 50) {
            reason = 'Overweight + Oversize + Handling';
        }
    } else if (oversizeFee) {
        reason = '(Oversize)';
    }

    console.log(totalFee, reason);
}

calcCharges(52, 160);
calcCharges(48, 180);
calcCharges(55, 190);
