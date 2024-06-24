class List {
    numbers = [];

    add(element) {
        // adds new element to the collection
        this.numbers.push(element);
        this.sort();
    }

    remove(index) {
        // removes element at position index
        this.numbers.splice(index, 1);
    }

    get(index) {
        // returns value of element at position index
        return this.numbers[index];
    }

    size() {
        // return number of elements stored in the collection
        return this.numbers.length;
    }

    sort() {
        // sort elements in the collection
        this.numbers.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
