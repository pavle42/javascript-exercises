const sumAll = function(first, second) {
    if (first < 0 || second < 0) return 'ERROR';
    if (first % 1 !== 0 || second % 1 !== 0) return 'ERROR';
    if (typeof first !== 'number' || typeof second !== 'number') return 'ERROR';

    if (first > second) {
        [first, second] = [second, first]
    }
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
