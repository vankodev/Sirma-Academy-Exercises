function convertToJSON(name, surname, eyeColor) {
    const personObject = {
        name,
        lastName: surname,
        eyeColor,
    };

    const personJSON = JSON.stringify(personObject);

    console.log(personJSON);
}

convertToJSON('Ivan', 'Ivanov', 'blue');
convertToJSON('Maria', 'Petrova', 'brown');
