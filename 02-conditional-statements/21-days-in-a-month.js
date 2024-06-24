function getDaysInMonth(monthNumber) {
    switch (monthNumber) {
        case 1: // January
            return 31;
        case 2: // February
            return 29;
        case 3: // March
            return 31;
        case 4: // April
            return 30;
        case 5: // May
            return 31;
        case 6: // June
            return 30;
        case 7: // July
            return 31;
        case 8: // August
            return 31;
        case 9: // September
            return 30;
        case 10: // October
            return 31;
        case 11: // November
            return 30;
        case 12: // December
            return 31;
    }
}

console.log(getDaysInMonth(1));
console.log(getDaysInMonth(2));
console.log(getDaysInMonth(4));
console.log(getDaysInMonth(7));
