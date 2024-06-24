function padawanEquipment(money, students, lightsaberPrice, robePrice, beltPrice) {
    const lightsabersCost = Math.ceil(students * 1.1) * lightsaberPrice;
    const beltsDiscount = Math.floor(students / 6) * beltPrice;
    const beltsCost = students * beltPrice - beltsDiscount;
    const robesCost = students * robePrice;
    const equipmentCost = lightsabersCost + beltsCost + robesCost;

    if (money >= equipmentCost) {
        console.log(`The money is enough - it would cost ${equipmentCost.toFixed(2)}lv.`);
    } else {
        const neededMoney = equipmentCost - money;
        console.log(`George Lucas will need ${neededMoney}lv more.`);
    }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);
