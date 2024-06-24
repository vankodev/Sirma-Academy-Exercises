function brewPotion(ingredient1, ingredient2) {
    const haveHerbs = ingredient1 == 'herbs' || ingredient2 == 'herbs';
    const haveWater = ingredient1 == 'water' || ingredient2 == 'water';
    const haveOil = ingredient1 == 'oil' || ingredient2 == 'oil';
    const haveBerries = ingredient1 == 'berries' || ingredient2 == 'berries';
    const haveSugar = ingredient1 == 'sugar' || ingredient2 == 'sugar';

    if (haveHerbs) {
        if (haveWater) {
            console.log('Health potion');
        } else if (haveOil) {
            console.log('Stealth potion');
        } else {
            console.log('Minor stamina potion');
        }
    } else if (haveBerries) {
        if (haveSugar) {
            console.log('Speed potion');
        } else {
            console.log('Minor energy potion');
        }
    } else {
        console.log('No potion');
    }
}

brewPotion('herbs', 'water');
brewPotion('herbs', 'oil');
brewPotion('herbs', 'banana');
brewPotion('berries', 'sugar');
brewPotion('berries', 'banana');
brewPotion('herbs', 'sugar');
brewPotion('sugar', 'salt');
