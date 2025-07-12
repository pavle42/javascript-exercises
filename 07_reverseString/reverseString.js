const reverseString = function(word) {
    let reversedWord = [];
    for (let i = 0; i < word.length / 2; i++) {
        reversedWord[i] = word[word.length - 1 - i];
        reversedWord[word.length - 1 - i] = word[i];
    }

    return reversedWord.join('');
};

// I could've done this as well: return word.split('').reverse().join('')

// Do not edit below this line
module.exports = reverseString;
