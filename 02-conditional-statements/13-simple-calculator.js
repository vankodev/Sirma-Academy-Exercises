function calculate(a, b, operation) {
    let calculation = 0;
    
    switch (operation) {
        case 'add':
            calculation = a + b;
            break;
        case 'subtract':
            calculation = a - b;
            break;
        case 'divide':
            calculation = a / b;
            break;
        case 'multiply':
            calculation = a * b;
            break;
    }

    console.log(Number(calculation.toFixed(2)))
}

calculate(5, 5, 'add');
calculate(10, 12, 'subtract');
calculate(9, 3, 'divide');
calculate(5, 2, 'divide');
calculate(3.1, 0.1, 'multiply');
