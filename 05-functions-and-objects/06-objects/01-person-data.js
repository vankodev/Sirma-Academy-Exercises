function getPersonData(name, surname, age) {
    let person = {
        firstName: name,
        lastName: surname,
        age: age,
    };

    return person;
}

console.log(getPersonData('Ivan', 'Ivanov', 29));
console.log(getPersonData('Maria', 'Marinova', 13));
