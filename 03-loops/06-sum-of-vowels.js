function sumVowels(string) {
    let sum = 0;

    for (i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
            default:
                break;
        }
    }

    console.log(sum);
}

sumVowels('hello');
sumVowels('hi');
sumVowels('bye');
sumVowels('zzzz');
