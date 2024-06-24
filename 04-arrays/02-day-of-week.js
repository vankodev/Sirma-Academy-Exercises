function printDayOfWeek(n) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    console.log(days[n - 1] || 'Invalid day!');
}

printDayOfWeek(3);
printDayOfWeek(6);
printDayOfWeek(11);
