class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

function createCats(input) {
    const cats = [];

    for (const cat of input) {
        const [name, ageText] = cat.split(' ');
        const age = parseInt(ageText);
        const catObj = new Cat(name, age);

        cats.push(catObj);
    }

    for (const cat of cats) {
        cat.meow();
    }
}

createCats(['Mellon 2', 'Tom 3']);
createCats(['Branch 1', 'Poppy 3', 'Goldy 2']);
