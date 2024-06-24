function calcExpense(budget, season) {
    let expense = 0;
    let location = '';
    let destination = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            location = 'Camp';
            expense = budget * 0.3;
        } else if (season == 'winter') {
            location = 'Hotel';
            expense = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Europe';
        if (season == 'summer') {
            location = 'Camp';
            expense = budget * 0.4;
        } else if (season == 'winter') {
            location = 'Hotel';
            expense = budget * 0.8;
        }
    } else if (budget > 1000) {
        destination = 'Asia';
        location = 'Hotel';
        expense = budget * 0.9;
    }

    console.log(
        `Somewhere in ${destination}\n${location} - ${expense.toFixed(2)}`
    );
}

calcExpense(50, 'summer');
calcExpense(75, 'winter');
calcExpense(312, 'summer');
calcExpense(678.53, 'winter');
calcExpense(1500, 'summer');
