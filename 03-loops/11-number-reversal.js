function reverseNum(n) {
    let str = n.toString();
    let reversed = '';

    for (i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    console.log(reversed);
}

reverseNum(123);
reverseNum(9876);
reverseNum(505);
reverseNum(10203);
reverseNum(7);
