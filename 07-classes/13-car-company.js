class CarsRegister {
    constructor() {
        this.cars = new Map();
    }

    addCar(carBrand, carModel, producedCars) {
        if (!this.cars.has(carBrand)) {
            this.cars.set(carBrand, new Map());
        }

        const models = this.cars.get(carBrand);

        if (!models.has(carModel)) {
            models.set(carModel, 0);
        }

        models.set(carModel, models.get(carModel) + producedCars);
    }

    printCars() {
        for (const [brand, models] of this.cars) {
            console.log(brand);
            for (const [model, producedCars] of models) {
                console.log(`###${model} -> ${producedCars}`);
            }
        }
    }
}

function registerCars(carsInput) {
    const carsRegister = new CarsRegister();

    carsInput.forEach((entry) => {
        const [carBrand, carModel, producedCars] = entry.split(' | ');
        carsRegister.addCar(carBrand, carModel, Number(producedCars));
    });

    carsRegister.printCars();
}

const input = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
];

registerCars(input);
