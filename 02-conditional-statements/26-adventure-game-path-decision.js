function takePath(leftHand, rightHand) {
    const hasSword = leftHand == 'sword' || rightHand == 'sword';
    const hasShield = leftHand == 'shield' || rightHand == 'shield';
    const hasMap = leftHand == 'map' || rightHand == 'map';
    const hasCoins = leftHand == 'coins' || rightHand == 'coins';
    const hasNoTools = !hasSword && !hasShield && !hasMap && !hasCoins;

    if (hasSword) {
        if (hasShield) {
            console.log('Path to the castle');
        } else {
            console.log('Path to the forest');
        }
    }

    if (hasMap) {
        if (hasCoins) {
            console.log('Go to the town');
        } else {
            console.log('Camp');
        }
    }

    if (hasNoTools) {
        console.log('Wander aimlessly');
    }
}

takePath('sword', 'shield');
takePath('map', 'coins');
takePath('torch', 'flower');
takePath('sword', 'pouch');
takePath('map', 'compass');
