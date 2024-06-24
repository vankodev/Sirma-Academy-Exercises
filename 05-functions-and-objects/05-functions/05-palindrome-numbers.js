function isPalindrome(numbers) {
    for (let number of numbers) {
        let reversedNumber = 0;
        let tempNumber = number;

        while (tempNumber > 0) {
            reversedNumber = reversedNumber * 10 + (tempNumber % 10);
            tempNumber = Math.floor(tempNumber / 10);
        }

        console.log(number === reversedNumber ? true : false);
    }
}

isPalindrome([123, 323, 421, 121]);
console.log('-----');
isPalindrome([32, 2, 232, 1010]);
