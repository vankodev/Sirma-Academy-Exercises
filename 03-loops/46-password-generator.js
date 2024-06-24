function generatePassword(n, l) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3 = 0; s3 < l; s3++) {
                for (let s4 = 0; s4 < l; s4++) {
                    for (let s5 = 1; s5 <= n; s5++) {
                        let password =
                            s1.toString() +
                            s2.toString() +
                            letters[s3] +
                            letters[s4];

                        if (s5 > s1 && s5 > s2) {
                            password += s5;
                            console.log(password);
                        }
                    }
                }
            }
        }
    }
}

generatePassword(2, 4);
console.log('---------');
generatePassword(3, 1);
