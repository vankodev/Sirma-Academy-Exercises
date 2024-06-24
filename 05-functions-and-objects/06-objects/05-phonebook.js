function printPhonebook(input) {
    let phonebook = {};

    for (const record of input) {
        let recordArr = record.split(' ');
        let name = recordArr.shift();
        let phone = recordArr.join(' ');

        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

printPhonebook([
    'Peter 0888 657 212', 
    'Bob 0899 657 212', 
    'Peter 123123'
]);

console.log('-------------------');

printPhonebook([
    'Maria 123', 
    'Samantha 456', 
    'Nicole 789'
]);
