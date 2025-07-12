const repeatString = function(word, timesToRepeat) {
    if (timesToRepeat < 0) return 'ERROR';

    let returnString = '';
    for (let i = 0; i < timesToRepeat; i++) {
        returnString += word;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
