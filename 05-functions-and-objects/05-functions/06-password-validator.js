function hasValidCharacterLength(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
    }

    return isValid;
}

function isAlphanumeric(password) {
    let isValid = true;

    for (let char of password) {
        if (
            !(char.toUpperCase() >= 'A' && char.toUpperCase() <= 'Z') &&
            !(char >= '0' && char <= '9')
        ) {
            isValid = false;
            break;
        }
    }

    return isValid;
}

function hasTwoDigits(password) {
    let digitCount = 0;

    for (let char of password) {
        let digit = Number(char);
        if (Number.isInteger(digit)) digitCount++;
        if (digitCount >= 2) break;
    }

    let isValid = digitCount >= 2;
    return isValid;
}

function validatePassword(password) {
    let errors = [];

    if (!hasValidCharacterLength(password)) {
        errors.push('Password must be between 6 and 10 characters');
    }

    if (!isAlphanumeric(password)) {
        errors.push('Password must consist only of letters and digits');
    }

    if (!hasTwoDigits(password)) {
        errors.push('Password must have at least 2 digits');
    }

    if (errors.length) {
        for (let error of errors) {
            console.log(error);
        }
    } else {
        console.log('Password is valid');
    }
}

validatePassword('pass');
console.log('----------');
validatePassword('APass123');
console.log('----------');
validatePassword('Pa$s$s');
