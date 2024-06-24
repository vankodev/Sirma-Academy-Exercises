function palindromeCheck(string) {
    let reversed = '';

    for (let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed;
    }

    console.log(string == reversed);
}

palindromeCheck('radar');
palindromeCheck('hello');
palindromeCheck('racecar');
palindromeCheck('java');
palindromeCheck('madam');
