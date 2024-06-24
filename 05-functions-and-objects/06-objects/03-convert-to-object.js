function convertToObject(input) {
    let data = JSON.parse(input);

    for (let key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
console.log('------');
convertToObject('{"firstName": "Ivan", "lastName": "Ivanov"}');
