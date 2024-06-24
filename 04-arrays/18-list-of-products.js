function printOrdered(products) {
    // bubble sort products
    for (let i = 0; i < products.length - 1; i++) {
        for (let j = 0; j < products.length - 1 - i; j++) {
            if (products[j] > products[j + 1]) {
                // swap elements
                let currentElement = products[j];
                products[j] = products[j + 1];
                products[j + 1] = currentElement;
            }
        }
    }

    // print with numbers
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]}`);
    }
}

printOrdered(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
