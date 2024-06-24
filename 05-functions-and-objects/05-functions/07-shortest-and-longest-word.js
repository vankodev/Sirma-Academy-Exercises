function getWords(string) {
    let cleanedText = '';

    for (let char of string) {
        if (
            (char.toUpperCase() >= 'A' && char.toUpperCase() <= 'Z') ||
            char === ' '
        ) {
            cleanedText += char;
        }
    }

    let words = cleanedText.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i] === '') {
            words.splice(i, 1);
        }
    }

    return words;
}

function findShortestAndLongest(string) {
    const words = getWords(string);
    let longest = words[0];
    let shortest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
        if (word.length < shortest.length) {
            shortest = word;
        }
    }

    console.log('Longest ->', longest);
    console.log('Shortest ->', shortest);
}

findShortestAndLongest('Hello how are you today? I hope you are fine ');
findShortestAndLongest( 'Lorem Ipsum is dummy text of the typesetting industry.' );
