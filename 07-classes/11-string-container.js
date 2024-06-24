class StringContainer {
    #innerString;
    #innerLength;

    constructor(innerString, innerLength) {
        this.#innerString = innerString;
        this.#innerLength = innerLength;
    }

    increase(length) {
        this.#innerLength += length;
    }

    decrease(length) {
        this.#innerLength -= length;

        if (this.#innerLength < 0) {
            this.#innerLength = 0;
        }
    }

    toString() {
        let string = this.#innerString;
        let length = this.#innerLength;

        return string.length > length
            ? string.substring(0, length) + '...'
            : string;
    }
}

let test = new StringContainer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
