function isArmstrong(n) {
    let string = n.toString();
    let sum = 0;
    let isArmstrong = false;

    for (let i = 0; i < string.length; i++) {
        sum += Math.pow(string[i], string.length);
    }

    if (string == sum) {
        isArmstrong = true;
    } else {
        isArmstrong = false;
    }

    console.log(isArmstrong);
}

isArmstrong(153);
isArmstrong(370);
isArmstrong(123);
isArmstrong(407);
isArmstrong(1634);
