function manipulate(array) {
    let numbers = array[0].split(' ');
    let commands = [];

    for (let i = 1; i < array.length; i++) {
        commands.push(array[i].split(' '));
    }

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i][0];
        const num1 = commands[i][1];
        const num2 = commands[i][2];

        switch (command) {
            case 'Add':
                numbers.push(num1);
                break;
            case 'Remove':
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === num1) {
                        numbers.splice(i, 1);
                    }
                }
                break;
            case 'RemoveAt':
                numbers.splice(num1, 1);
                break;
            case 'Insert':
                numbers.splice(num2, 0, num1);
                break;
        }
    }

    console.log(numbers.join(' '));
}

manipulate([
    '4 19 2 53 6 43', 
    'Add 3', 
    'Remove 2', 
    'RemoveAt 1', 
    'Insert 8 3'
]);
