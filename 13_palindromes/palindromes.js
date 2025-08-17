const palindromes = function (text) {
    text = text.toLowerCase();

    let leftPointer = 0;
    let rightPointer = text.length;

    while (leftPointer < rightPointer) {
        while (!isAlphanumeric(text[leftPointer])) {
            leftPointer++;
        }

        while (!isAlphanumeric(text[rightPointer])) {
            rightPointer--;
        }

        if (text[leftPointer] != text[rightPointer]) {
            return false;
        } else {
            leftPointer++;
            rightPointer--;
        }
    }

    return true;
};

function isAlphanumeric(ch) {
    return /^[A-Za-z0-9]$/.test(ch);
}

// Do not edit below this line
module.exports = palindromes;
