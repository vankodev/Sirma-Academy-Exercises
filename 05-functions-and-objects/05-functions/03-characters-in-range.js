function printASCII(char1, char2) {
    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);
    const start = charCode1 < charCode2 ? charCode1 : charCode2;
    const end = charCode1 > charCode2 ? charCode1 : charCode2;

    let characters = '';

    for (let i = start + 1; i < end; i++) {
        characters += String.fromCharCode(i) + ' ';
    }

    console.log(characters);
}

printASCII('a', 'd');
printASCII('#', ':');
printASCII('C', '#');
