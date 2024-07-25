function createPrivateCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        },
    };
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
